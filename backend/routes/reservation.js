const express = require('express');

const router = express.Router();
const Reservation=require("../models/reservation.js");

//Reservation registration


router.post('/add',async(req,res)=>{
    try{
        const name = req.body.name;
        const gender = req.body.gender;
        const email = req.body.email;
        const phonenumber = req.body.phonenumber;
        const appointmentDate = req.body.appointmentDate;
        const departureTime = req.body.departureTime;  
        const services = req.body.services;     
        
        const existingReservation = await Reservation.findOne({ email });
        if (existingReservation) {
          return res.status(400).json({ message: 'Reservation already exists' });
        }
        
        const newReservation = new Reservation({
          name,
          gender,
          email,
          phonenumber,
          appointmentDate,
          departureTime,
          services,
        });
        
        await newReservation.save();
    
        res.status(201).json({ message: 'Reservation add successfully' });
    }catch (error) {
        res.status(500).json({ message: 'Internal server error' });
      }

    });

    router.get('/reservation', async (req, res) => {
      try {
        const reservations = await Reservation.find();
        res.json(reservations);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    });

    router.delete('/reservation/:id', async (req, res) => {
      try {
        const reservationId = req.params.id;
        const reservation = await Reservation.findByIdAndDelete(reservationId);
    
        if (!reservation) {
          return res.status(404).json({ message: 'reservation not found' });
        }
    
        res.json({ message: 'reservation deleted successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    });

    router.put('/update/:id', async (req, res) => {
      const reservationId = req.params.id;
      const updatedReservation = req.body;
    
      try {
        const reservation = await Reservation.findByIdAndUpdate(reservationId, updatedReservation, { new: true });
    
        if (!reservation) {
          return res.status(404).json({ message: 'reservation not found' });
        }
    
        return res.status(200).json({ message: 'reservation updated successfully', reservation });
      } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
      }
    });


    module.exports=router;

