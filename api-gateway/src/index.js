const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const appointmentRoutes = require('./routes/appointment');
const notificationRoutes = require('./routes/notification');


const app = express();
app.use(cors());
app.use(express.json());

// Mount service routes
app.use('/auth', authRoutes);
app.use('/appointment', appointmentRoutes);
app.use('/notification', notificationRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
