const { Kafka } = require('kafkajs');
const kafka = new Kafka({ clientId: 'notification-service', brokers: (process.env.KAFKA_BROKERS || '').split(',') });
const consumer = kafka.consumer({ groupId: 'notification-group' });

async function start() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'reservation.created', fromBeginning: false });
  await consumer.subscribe({ topic: 'reservation.updated', fromBeginning: false });
  await consumer.subscribe({ topic: 'reservation.cancelled', fromBeginning: false });

  await consumer.run({
    eachMessage: async ({ topic, message }) => {
      const evt = JSON.parse(message.value.toString());
      // send email/SMS here
      console.log(`[notify] ${topic}`, evt.data);
    }
  });
}
start().catch(console.error);
