const express = require('express');
const Reservation = require('../models/reservation');
const Outbox = require('../outbox/outbox.model');
const router = express.Router();

/** Create reservation
 * 1) (Optionally) call Salon service via REST to check availability
 * 2) Save reservation + outbox in same transaction (Mongo session)
 * 3) Worker publishes `reservation.created`
 */
router.post('/', async (req, res) => {
  const { customerId, serviceId, appointmentDate, startTime, endTime } = req.body;

  const session = await Reservation.startSession();
  session.startTransaction();
  try {
    const doc = await Reservation.create([{ customerId, serviceId, appointmentDate, startTime, endTime, status: 'CONFIRMED' }], { session });
    const reservation = doc[0];

    await Outbox.create([{
      aggregateId: reservation._id.toString(),
      eventType: 'reservation.created',
      payload: {
        reservationId: reservation._id.toString(),
        customerId, serviceId, appointmentDate, startTime, endTime, status: reservation.status
      }
    }], { session });

    await session.commitTransaction();
    return res.status(201).json(reservation);
  } catch (e) {
    await session.abortTransaction();
    console.error(e); return res.status(500).json({ message: 'Failed to create reservation' });
  } finally {
    session.endSession();
  }
});

router.put('/:id', async (req, res) => {
  const session = await Reservation.startSession(); session.startTransaction();
  try {
    const updated = await Reservation.findByIdAndUpdate(req.params.id, req.body, { new: true, session });
    if (!updated) { await session.abortTransaction(); return res.status(404).json({ message: 'Not found' }); }

    await Outbox.create([{
      aggregateId: updated._id.toString(),
      eventType: 'reservation.updated',
      payload: {
        reservationId: updated._id.toString(),
        ...req.body
      }
    }], { session });

    await session.commitTransaction();
    res.json(updated);
  } catch (e) {
    await session.abortTransaction();
    res.status(500).json({ message: 'Failed to update' });
  } finally { session.endSession(); }
});

router.delete('/:id', async (req, res) => {
  const session = await Reservation.startSession(); session.startTransaction();
  try {
    const removed = await Reservation.findByIdAndDelete(req.params.id, { session });
    if (!removed) { await session.abortTransaction(); return res.status(404).json({ message: 'Not found' }); }

    await Outbox.create([{
      aggregateId: removed._id.toString(),
      eventType: 'reservation.cancelled',
      payload: { reservationId: removed._id.toString() }
    }], { session });

    await session.commitTransaction();
    res.json({ message: 'Cancelled' });
  } catch (e) {
    await session.abortTransaction();
    res.status(500).json({ message: 'Failed to cancel' });
  } finally { session.endSession(); }
});

module.exports = router;
