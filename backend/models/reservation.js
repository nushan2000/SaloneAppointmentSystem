const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const reservationschema=new Schema({
    name:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    appointmentDate:{
        type:String,
        required:true
    },
    departureTime:{
        type:String,
        required:true
    },
    services:{
        type:String,
        required:true
    }


    
})

const reservation = mongoose.model("Reservation",reservationschema);

module.exports=reservation; 