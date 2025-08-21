import express from "express";
import mongoose from "mongoose";
import { Kafka } from "kafkajs";
import dotenv from "dotenv";

dotenv.config();
const app = express();
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

    const PORT = process.env.PORT || 4001;
    app.listen(PORT, () => console.log(`✅ Appointment Service running on ${PORT}`));

  } catch (err) {
    console.error("❌ Failed to start server:", err);
  }
}

startServer();
