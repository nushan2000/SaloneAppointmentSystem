// auth-service/src/server.js
require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { Kafka } = require("kafkajs");

const Customer = require("../src/models/customer"); // your model
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;

// --------------------
// MongoDB Connection
// --------------------
mongoose.connect(process.env.MONGO_URI_AUTH || "mongodb://localhost:27017/Salone", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected for AuthService"))
.catch((err) => console.error("MongoDB connection error:", err));

// --------------------
// Kafka Setup
// --------------------
const kafka = new Kafka({
  clientId: "auth-service",
  brokers: [process.env.KAFKA_BROKER || "localhost:9092"],
});

const producer = kafka.producer();
(async () => {
  try {
    await producer.connect(); // wait until Kafka is ready
    console.log("✅ Kafka producer connected for AuthService");

    app.listen(PORT, () => {
      console.log(`✅ Auth Service running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start Kafka producer:", err);
    process.exit(1);
  }
})();

// --------------------
// Routes
// --------------------

// --- Signup ---
app.post("/signup", async (req, res) => {
  try {
    const { name, email, password, gender, phonenumber } = req.body;

    const existingUser = await Customer.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new Customer({
      name,
      email,
      password: hashedPassword,
      gender,
      phonenumber,
    });

    await user.save();

    // Publish Kafka event
    await producer.send({
      topic: "user-created",
      messages: [{ value: JSON.stringify({ email: user.email, name: user.name }) }],
    });

    res.status(201).json({ message: "User created", user: { name: user.name, email: user.email } });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Failed to create user" });
  }
});

// --- Login ---
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Customer.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    // Send login event to Kafka
    await producer.send({
      topic: "user-login",
      messages: [
        {
          value: JSON.stringify({
            eventType: "login",
            email: user.email,
            name: user.name,
            time: new Date(),
          }),
        },
      ],
    });

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, user: { name: user.name, email: user.email } });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Failed to login" });
  }
});

