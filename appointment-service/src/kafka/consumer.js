const { Kafka } = require('kafkajs');
const kafka = new Kafka({ clientId: 'reservation-service', brokers: (process.env.KAFKA_BROKERS || '').split(',') });
const consumer = kafka.consumer({ groupId: 'reservation-service-group' });

async function start() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'service.updated', fromBeginning: false });
  await consumer.run({
    eachMessage: async ({ message }) => {
      const evt = JSON.parse(message.value.toString());
      // optionally sync service info into a local read model or cache
      console.log('service.updated received', evt.data);
    }
  });
}
start().catch(console.error);
