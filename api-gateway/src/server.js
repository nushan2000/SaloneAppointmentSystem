const express = require("express");
const proxy = require("express-http-proxy");

const app = express();

app.use("/auth", proxy("http://auth-service:5000", {
  proxyReqPathResolver: (req) => req.originalUrl.replace(/^\/auth/, '')
}));

app.use("/appointments", proxy("http://appointment-service:5001", {
  proxyReqPathResolver: (req) => req.originalUrl.replace(/^\/appointments/, '')
}));

app.use("/notifications", proxy("http://notification-service:5002", {
  proxyReqPathResolver: (req) => req.originalUrl.replace(/^\/notifications/, '')
}));

const PORT = 4000;
app.listen(PORT, () => console.log(`API Gateway running on ${PORT}`));
