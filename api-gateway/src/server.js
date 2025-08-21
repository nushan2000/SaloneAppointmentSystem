// api-gateway/server.js
import express from "express";
import proxy from "express-http-proxy";

const app = express();

app.use("/auth", proxy("http://localhost:4000"));
app.use("/salon", proxy("http://localhost:4001"));
app.use("/reservation", proxy("http://localhost:4002"));

app.listen(3000, () => console.log("API Gateway running on 3000"));
