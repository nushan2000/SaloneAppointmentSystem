const express = require('express');
const axios = require('axios');

const router = express.Router();
const NOTIFICATION_SERVICE_URL = 'http://notification-service:4002';

router.get('/notifications', async (req, res) => {
  try {
    const response = await axios.get(`${NOTIFICATION_SERVICE_URL}/notifications`);
    res.status(response.status).send(response.data);
  } catch (err) {
    res.status(500).send({ error: 'API Gateway: Notification service unreachable' });
  }
});

module.exports = router;
