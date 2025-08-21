const mongoose = require('mongoose');
const OutboxSchema = new mongoose.Schema({
  aggregateId: { type: String, index: true },
  eventType: { type: String, required: true },
  payload: { type: Object, required: true },
  createdAt: { type: Date, default: Date.now },
  publishedAt: { type: Date, default: null }
}, { collection: 'outbox' });

module.exports = mongoose.model('Outbox', OutboxSchema);
