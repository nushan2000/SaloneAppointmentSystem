const express = require("express");
const proxy = require("express-http-proxy");

const app = express();

app.use("/auth", proxy("http://auth-service:5000"));
app.use("/appointments", proxy("http://appointment-service:5001"));
app.use("/notifications", proxy("http://notification-service:5002"));

const PORT = 4000;
app.listen(PORT, () => console.log(`API Gateway running on ${PORT}`));
