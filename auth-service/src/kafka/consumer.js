const { Kafka } = require('kafkajs');
const kafka = new Kafka({ clientId: 'reservation-service', brokers: ['kafka:9092'] });
const consumer = kafka.consumer({ groupId: 'reservation-group' });

async function listenCustomerEvents() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'customer.created' });

  await consumer.run({
    eachMessage: async ({ topic, message }) => {
      const customerData = JSON.parse(message.value.toString());
      console.log("Reservation service got customer event:", customerData);
      // Store/Cache customer info if needed
    },
  });
}

listenCustomerEvents();
