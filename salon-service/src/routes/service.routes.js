const express = require('express');
const Service = require('../models/service');
const { publish } = require('../kafka/producer');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, durationMins, price } = req.body;
  const doc = await Service.create({ name, durationMins, price });
  await publish('service.created', doc._id.toString(), {
    serviceId: doc._id.toString(), name, durationMins, price
  });
  res.status(201).json(doc);
});

router.put('/:id', async (req, res) => {
  const { name, durationMins, price } = req.body;
  const doc = await Service.findByIdAndUpdate(req.params.id, { name, durationMins, price }, { new: true });
  if (!doc) return res.status(404).json({ message: 'Not found' });
  await publish('service.updated', doc._id.toString(), {
    serviceId: doc._id.toString(), name: doc.name, durationMins: doc.durationMins, price: doc.price
  });
  res.json(doc);
});

router.delete('/:id', async (req, res) => {
  const doc = await Service.findByIdAndDelete(req.params.id);
  if (!doc) return res.status(404).json({ message: 'Not found' });
  await publish('service.deleted', doc._id.toString(), { serviceId: doc._id.toString() });
  res.json({ message: 'Deleted' });
});

module.exports = router;
