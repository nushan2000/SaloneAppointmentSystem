import { Kafka } from "kafkajs";
import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
const app = express();
app.use(cors({
  origin: process.env.ORIGIN || "http://localhost:3000", // your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: process.env.ORIGIN || "http://localhost:3000" }, // allow frontend to connect
});

io.on("connection", (socket) => {
  console.log("Frontend connected:", socket.id);
});

const kafka = new Kafka({ clientId: "notification-service", brokers: [process.env.KAFKA_BROKER || "localhost:9092"] });
const consumer = kafka.consumer({ groupId: "notifications" });

await consumer.connect();
await consumer.subscribe({ topic: "user-created" });
await consumer.subscribe({ topic: "user-login" });

await consumer.run({
  eachMessage: async ({ topic, message }) => {
    const data = JSON.parse(message.value.toString());
    let notification = {};

    if (topic === "user-created") {
      console.log("User created event received:", data);
      notification = { type: "signup", message: `Welcome ${data.email}` };
    }

    if (topic === "user-login") {
      console.log("User login event received:", data);
      notification = { type: "login", message: `${data.email} logged in at ${data.time}` };
    }

    // Send to frontend
    io.emit("notification", notification);
  },
});

server.listen(4002, () => console.log("Notification service running on port 4002"));
