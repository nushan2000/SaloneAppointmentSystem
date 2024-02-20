const mongoose=require('mongoose');
const bcrypt = require('bcryptjs');

const Schema=mongoose.Schema;

const customerschema=new Schema({
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


    password:{
        type:String,
        required:true

    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false,
    }
})

customerschema.methods.matchPassword=async function (enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

const customer = mongoose.model("Customer",customerschema);

module.exports=customer; 