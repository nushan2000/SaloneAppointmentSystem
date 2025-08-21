// salon-service/server.js
import express from "express";
import { Kafka } from "kafkajs";

const app = express();
app.use(express.json());

const kafka = new Kafka({ clientId: "salon-service", brokers: ["localhost:9092"] });
const producer = kafka.producer();
await producer.connect();

let services = [];

app.post("/services", async (req, res) => {
  const service = { id: Date.now(), ...req.body };
  services.push(service);
  await producer.send({
    topic: "service-added",
    messages: [{ value: JSON.stringify(service) }],
  });
  res.json(service);
});

app.get("/services", (req, res) => {
  res.json(services);
});

app.listen(4001, () => console.log("Salon service running on 4001"));
