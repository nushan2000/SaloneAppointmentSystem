const dotenv = require("dotenv").config();
const express =require("express");
const mongoose=require("mongoose");
const bodyparser=require("body-parser")
const cors=require("cors")

const app=express();


app.use(cors());

const PORT = process.env.PORT || 8080;

//Middlewares
app.use(express.json());

app.use(bodyparser.json());


const customerRouter =require("./routes/customers.js");
app.use("/customer",customerRouter);

const reservationRouter =require("./routes/reservation.js");
app.use("/reservation",reservationRouter);

//connect to Db and start server
mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("connected db")
            app.listen(PORT,()=>{
                console.log(`sucess ${PORT}`)
            }); 

        })


