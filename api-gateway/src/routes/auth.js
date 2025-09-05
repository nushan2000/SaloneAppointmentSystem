const express = require('express');
const axios = require('axios');

const router = express.Router();

// Replace with your auth-service Kubernetes service name
const AUTH_SERVICE_URL = 'http://auth-service:4000';

router.post('/login', async (req, res) => {
  try {
    const response = await axios.post(`${AUTH_SERVICE_URL}/login`, req.body);
    res.status(response.status).send(response.data);
  } catch (err) {
    if (err.response) {
      res.status(err.response.status).send(err.response.data);
    } else {
      res.status(500).send({ error: 'API Gateway: Auth service unreachable' });
    }
  }
});

module.exports = router;
