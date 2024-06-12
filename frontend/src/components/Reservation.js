import React, { useState } from "react";
import './css/Reservation.css'
import axios from "axios";

export default function AddReservation(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [appointmentDate, setappointmentDate] = useState("");
    const [departureTime, setdepartureTime] = useState("");
    const [services, setservices] = useState("");
    const [gender, setgender] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newReservation = {
            name, email, phonenumber, appointmentDate, departureTime, services, gender
        };

        axios.post("http://localhost:8070/reservation/add", newReservation)
            .then(() => {
                alert("reservation added");
                window.location.reload();
            })
            .catch((err) => {
                alert(err);
            });
    }

    return (
        <div className="reservation">
            <img className="k" src={require('./images/5.png')} alt="Decoration"></img>
            <div class="row41">
                <div class="column41">
                    <img className="img41" src={require('./images/resavationphoto.png')} alt="Reservation"></img>
                </div>
                <div class="column41">
                    <h2 className="text41">BOOKING</h2>
                    <h4>Got a question for your beauty bestie? I'm here to help.</h4>
                    <p>Sometimes our emails get filtered as spam. In case you have not heard from us within 24 hours, please do check your spam folder in your mailbox or give us a quick call. Admin Hours Monday to Friday : 09:00 - 17:00</p>
                </div>
            </div>

            <div className="x">
                <form className="form container" onSubmit={sendData}>
                    {/* Form inputs */}
                </form>
            </div>
        </div>
    );
}
