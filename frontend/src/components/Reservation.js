import React, { useState } from "react";
import './css/Reservation.css'
import axios from "axios";

export default function AddReservation(){

    
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phonenumber,setPhonenumber]=useState("");
    const [appointmentDate,setappointmentDate]=useState("");
    const [departureTime,setdepartureTime]=useState("");
    const [services,setservices]=useState("");
    const [gender,setgender]=useState("");

    

    
    
    function sendData(e){
        e.preventDefault();
        
        const newReservation={
            name,email,phonenumber,appointmentDate,departureTime,services,gender
        }

        axios.post("http://localhost:8080/reservation/add",newReservation).then(()=>{
          
            alert("reservation added");
            
            window.location.reload();

            
        }).catch((err)=>{
            alert(err)
        })

        
        
    };
    return(
<div className="reservation">
            <img className="k" src={require('./images/5.png')} alt="Decoration"></img>
            <div class="row41">
                <div class="column41">
                    <img className="img41" src={require('./images/resavationphoto.png')} alt="Reservation"></img>
                </div>
  <div class="column41" >
    
    <h2  className="text41">BOOKING</h2>
    <h4>Got a question for your beauty bestie? I'm here to help.</h4>
    <p>Sometimes our emails get filtered as spam. In case you have not heard from us within 24 hours, please do check your spam folder in your mailbox or give us a quick call. Admin Hours Monday to Friday : 09:00 - 17:00
</p>
  </div>
</div>

<div className="x">
  

        <form className="form container" onSubmit={sendData} >

        <div class="row mb-4">
  <div class="col">
    <label for="formGroupExampleInput " className="form-label label1">NAME</label>
    <input  type="text" class="form-control border border-dark" onChange={e=>setName(e.target.value)} placeholder="Name" aria-label="Name"/>
  </div>
 <div class="col">
    <label for="formGroupExampleInput" class="form-label label1">GENDER</label>
    <div class="form-check kk">
  <input class="form-check-input border border-dark" onChange={e=>setgender(e.target.value)} type="radio" name="flexRadioDefault" id="flexRadioDefault1"  value="Male"/>
  <label class="form-check-label ll" for="flexRadioDefault1">
    Male
  </label>
</div>
<div class="form-check kk">
  <input class="form-check-input border border-dark" onChange={e=>setgender(e.target.value)} type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Female"/>
  <label class="form-check-label ll" for="flexRadioDefault2">
    Female
  </label>
</div>
  </div>
</div>

 
  <div className="mb-4  ">
  <label for="formGroupExampleInput" class="form-label ">EMAIL</label>
    <input  placeholder="Type Email" type="email" className="form-control border border-dark" id="exampleInputEmail1" onChange={e=>setEmail(e.target.value)} aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-4  ">
  <label for="formGroupExampleInput" class="form-label">PHONE NUMBER</label>
  <input type="text"  placeholder="Phone Number" aria-label="Phonenumber " onChange={e=>setPhonenumber(e.target.value)} className="form-control border border-dark"/>

</div>
  <div className=" mb-4 ">
  <label for="formGroupExampleInput" class="form-label">APPOINTMENT DATE</label>
  <input type="date" aria-label="First name" onChange={e=>setappointmentDate(e.target.value)} className="form-control border border-dark"/>
  
</div>

<div className="mb-4  ">
  <label for="formGroupExampleInput" class="form-label">ESTIMATED DEPATURE TIME</label>
  <input type="text"  placeholder="Time" aria-label="time" onChange={e=>setdepartureTime(e.target.value)} className="form-control border border-dark"/>
 
</div>
<div className="mb-4 ">
<label for="formGroupExampleInput " class="form-label">WHICH SERVISES WOULD YOU LIKE TO BOOK</label>
<select class="form-select border border-dark" onChange={e=>setservices(e.target.value)} aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="Haircuts">Haircuts</option>
  <option value="Single Process">Single Process</option>
  <option value="Mini Foil">Mini Foil</option>
  <option value="Partial Foil">Partial Foil</option>
  <option value="Full Foil">Full Foil</option>
  <option value="Toner">Toner</option>
  <option value="Half Balayage">Half Balayage</option>
  <option value="Full Balayage">Full Balayage</option>
  <option value="Formal Styling">Formal Styling</option>
  <option value="Conditioning Treatment">Conditioning Treatment</option>
  <option value="Keratin Treatment">Keratin Treatment</option>
  <option value="Makeup">Makeup</option>

</select>
</div>

  <button type="submit"   className="btn btn-primary">Book</button>
  
</form>

</div>
</div>
    )
}
      
