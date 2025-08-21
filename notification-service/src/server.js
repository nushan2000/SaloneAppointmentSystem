// notification-service/server.js
import { Kafka } from "kafkajs";

const kafka = new Kafka({ clientId: "notification-service", brokers: ["localhost:9092"] });
const consumer = kafka.consumer({ groupId: "notifications" });

await consumer.connect();
await consumer.subscribe({ topic: "user-created" });
await consumer.subscribe({ topic: "user-login" });

await consumer.run({
  eachMessage: async ({ topic, message }) => {
    const data = JSON.parse(message.value.toString());
console.log("dsds");

    if (topic === "user-created") {
      console.log(`📩 Welcome email sent to ${data.email} (signup)`);
    }

    if (topic === "user-login") {
      console.log(`🔔 Login notification for ${data.email} at ${data.time}`);
    }
  },
});
