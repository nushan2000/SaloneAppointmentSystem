const express = require('express');
const axios = require('axios');

const router = express.Router();
const APPOINTMENT_SERVICE_URL = 'http://appointment-service:4001';

router.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${APPOINTMENT_SERVICE_URL}/appointments`);
    res.status(response.status).send(response.data);
  } catch (err) {
    res.status(500).send({ error: 'API Gateway: Appointment service unreachable' });
  }
});

module.exports = router;
