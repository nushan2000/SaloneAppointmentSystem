const { Kafka } = require('kafkajs');
const kafka = new Kafka({ clientId: 'auth-service', brokers: ['kafka:9092'] });
const producer = kafka.producer();

async function publishEvent(eventType, data) {
  await producer.connect();
  await producer.send({
    topic: eventType,
    messages: [{ key: data.customerId, value: JSON.stringify(data) }],
  });
}

module.exports = { publishEvent };
