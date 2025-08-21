const Outbox = require('./outbox.model');
const { publish } = require('../kafka/producer');

async function poll() {
  while (true) {
    const batch = await Outbox.find({ publishedAt: null }).limit(100);
    if (!batch.length) { await new Promise(r => setTimeout(r, 1000)); continue; }
    for (const evt of batch) {
      try {
        await publish(evt.eventType, evt.aggregateId, evt.payload);
        await Outbox.updateOne({ _id: evt._id }, { $set: { publishedAt: new Date() } });
      } catch (e) {
        console.error('Outbox publish failed', e);
      }
    }
  }
}
poll().catch(console.error);
