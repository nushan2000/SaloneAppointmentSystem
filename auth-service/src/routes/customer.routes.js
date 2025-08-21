const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Customer = require('../models/customer');
const { publishEvent } = require('../kafka/producer');

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { name, gender, email, phonenumber, password } = req.body;

    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) return res.status(400).json({ message: 'Customer already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newCustomer = new Customer({ name, gender, phonenumber, email, password: hashedPassword });
    await newCustomer.save();

    // Publish event to Kafka
    await publishEvent('customer.created', {
      customerId: newCustomer._id.toString(),
      name, gender, email, phonenumber
    });

    res.status(201).json({ message: 'Customer registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
