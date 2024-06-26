const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Customer=require("../models/customer.js");



const generateToken=(id)=>{
  return jwt.sign({id},process.env.JWT_SE,{
      expiresIn:"1h",
  });
};

//Customer registration
router.post('/signup',async(req,res)=>{
    try{
        const name = req.body.name;
        const gender = req.body.gender;
        const email = req.body.email;
        const phonenumber = req.body.phonenumber;
        const password = req.body.password;   
        
        const existingCustomer = await Customer.findOne({ email });
        if (existingCustomer) {
          return res.status(400).json({ message: 'Customer already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const newCustomer = new Customer({
          name,
          gender,
          phonenumber,
          email,
          password: hashedPassword,
        });
        
        await newCustomer.save();
    
        res.status(201).json({ message: 'Customer registered successfully' });
    }catch (error) {
        res.status(500).json({ message: 'Internal server error' });
      }





})
// Customer login
router.route("/logi").post((req,res)=>{
    const email = req.body.email; 
    const password = req.body.password;
  
    if(email == "" || password == "" ){
        res.json({
            status : "FAILED" , 
            message: "Empty input  email or password"
        });
    }else {
        //checking exist customer
        const customer=Customer.findOne({email}).then((customer)=>{
            if(customer){
                //user exist
  const hashedPassword = customer.password;
                bcrypt.compare(password,hashedPassword).then((result)=>{
                    if(result){
                        res.json({
                          _id:customer._id,
                          email:customer.email,
                          name:customer.name,
                          isAdmin:customer.isAdmin,
                          token:generateToken(customer._id)
                          


                        });
                        
                    }else{
                        res.json({
                            status : "FAILED" , 
                            message: "Invalied password"
                        });
                    }
                }).catch(()=>{
                    res.json({
                        status : "FAILED" , 
                        message: "An error occurred while comparing"
                    });
                })
            }else{
                res.json({
                    status : "FAILED" , 
                    message: "invalied email"
                });
            }
        }).catch(()=>{
            res.json({
                status : "FAILED" , 
                message: "An error occurred while checking for existing user"
            });
        })
  
  
    }
  
  })

  router.route('/profile').get((req, res) => {
    try {
      const customerId = req.customer.id; // Assuming you have middleware to get the authenticated customer's ID
      const customer = Customer.findById(customerId);
      if (!customer) {
        return res.status(404).json({ message: 'customer not found' });
      }
      res.status(200).json(customer);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });


  router.get('/customers', async (req, res) => {
    try {
      const customers = await Customer.find();
      res.json(customers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  router.delete('/customers/:id', async (req, res) => {
    try {
      const customerId = req.params.id;
      const customer = await Customer.findByIdAndDelete(customerId);
  
      if (!customer) {
        return res.status(404).json({ message: 'Customer not found' });
      }
  
      res.json({ message: 'Customer deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
  router.put('/update/:id', async (req, res) => {
    const customerId = req.params.id;
    const updatedCustomer = req.body;
  
    try {
      const customer = await Customer.findByIdAndUpdate(customerId, updatedCustomer, { new: true });
  
      if (!customer) {
        return res.status(404).json({ message: 'Customer not found' });
      }
  
      return res.status(200).json({ message: 'Customer updated successfully', customer });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
  });

  module.exports = router;
  


