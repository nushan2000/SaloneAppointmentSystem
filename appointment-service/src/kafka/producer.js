const { Kafka } = require('kafkajs');
const { v4: uuid } = require('uuid');
const kafka = new Kafka({ clientId: 'reservation-service', brokers: (process.env.KAFKA_BROKERS || '').split(',') });
const producer = kafka.producer();
async function ensure() { try { await producer.connect(); } catch {} }

exports.publish = async (eventType, key, data) => {
  await ensure();
  const envelope = { eventId: uuid(), eventType, eventVersion: 1, occurredAt: new Date().toISOString(), data };
  await producer.send({ topic: eventType, messages: [{ key, value: JSON.stringify(envelope) }] });
};
