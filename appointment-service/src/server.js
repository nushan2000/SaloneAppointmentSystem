import express from "express";
import mongoose from "mongoose";
import { Kafka } from "kafkajs";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors({
  origin: process.env.ORIGIN || "http://localhost:3000", // your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: String,
  email: { type: String, required: true },
  phonenumber: String,
  appointmentDate: { type: String, required: true },
  departureTime: String,
  services: String
}, { timestamps: true });

// Wrap everything in async start function
async function startServer() {
  try {
    // MongoDB connection
    await mongoose.connect(process.env.MONGO_URI_APPOINTMENTS || "mongodb://localhost:27017/Salone");
    console.log("✅ Connected to MongoDB");

    // Mongoose model
    const Appointment = mongoose.model("Appointment", appointmentSchema, "AppointmentServices");

    // Kafka setup
    const kafka = new Kafka({
      clientId: "appointment-service",
      brokers: [process.env.KAFKA_BROKER || "localhost:9092"]
    });
    const producer = kafka.producer();
    await producer.connect();
    console.log("✅ Kafka producer connected");

    // Routes
    app.post("/appointments", async (req, res) => {
      try {
        const appointment = new Appointment(req.body);
        await appointment.save();

        await producer.send({
          topic: "appointment-created",
          messages: [{ value: JSON.stringify(appointment) }]
        });

        console.log("Saved appointment:", appointment);
        res.status(201).json({ message: "Appointment added successfully", appointment });
      } catch (err) {
        console.error("Error creating appointment:", err);
        res.status(500).json({ error: "Failed to create appointment" });
      }
    });

    app.get("/appointments", async (req, res) => {
      try {
        const appointments = await Appointment.find();
        res.json(appointments);
      } catch (err) {
        console.error("Error fetching appointments:", err);
        res.status(500).json({ error: "Failed to fetch appointments" });
      }
    });

    app.put("/appointments/:id", async (req, res) => {
      try {
        const updatedAppointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedAppointment) return res.status(404).json({ message: "Appointment not found" });

        await producer.send({
          topic: "appointment-updated",
          messages: [{ value: JSON.stringify(updatedAppointment) }]
        });

        res.status(200).json({ message: "Appointment updated successfully", appointment: updatedAppointment });
      } catch (err) {
        console.error("Error updating appointment:", err);
        res.status(500).json({ error: "Failed to update appointment" });
      }
    });

    // Delete appointment by ID
    app.delete("/appointments/:id", async (req, res) => {
      try {
        const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);
        if (!deletedAppointment) return res.status(404).json({ message: "Appointment not found" });

        await producer.send({
          topic: "appointment-deleted",
          messages: [{ value: JSON.stringify(deletedAppointment) }]
        });

        res.json({ message: "Appointment deleted successfully" });
      } catch (err) {
        console.error("Error deleting appointment:", err);
        res.status(500).json({ error: "Failed to delete appointment" });
      }
    });

    // --------------------
    // Start server
    // --------------------
    const PORT = process.env.PORT || 4001;
    app.listen(PORT, () => console.log(`✅ Appointment Service running on ${PORT}`));

  } catch (err) {
    console.error("❌ Failed to start server:", err);
  }
}

startServer();