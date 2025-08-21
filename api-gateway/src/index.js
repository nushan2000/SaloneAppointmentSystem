const express = require('express');
const { verifyJWT } = require('./jwt');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(express.json());

const AUTH_URL = process.env.AUTH_URL;
const SALON_URL = process.env.SALON_URL;
const RESERVATION_URL = process.env.RESERVATION_URL;

// Public
app.use('/auth', createProxyMiddleware({ target: AUTH_URL, changeOrigin: true }));

// Protected
app.use('/salon', verifyJWT, createProxyMiddleware({ target: SALON_URL, changeOrigin: true }));
app.use('/reservation', verifyJWT, createProxyMiddleware({ target: RESERVATION_URL, changeOrigin: true }));

app.listen(4000, () => console.log('API Gateway on :4000'));
