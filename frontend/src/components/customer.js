import './css/Reservation.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import './css/customer.css';
import { io } from "socket.io-client";
import { NotificationContext } from "./NotificationContext";
import { useContext } from 'react';
function CustomerPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [appointmentDate, setappointmentDate] = useState("");
  const [departureTime, setdepartureTime] = useState("");
  const [services, setservices] = useState("");
  const [gender, setgender] = useState("");
  const { notifications } = useContext(NotificationContext);

// useEffect(() => {
//     // Connect to notification service after component mounts
//     const socket = io(`${process.env.REACT_APP_NOTIFICATION_SERVICE_URL}`);

//     // Listen for notifications
//     socket.on("notification", (data) => {
//       setNotifications((prev) => [...prev, data]);
//       console.log("New notification:", data);
//     });

//     // Cleanup on unmount
//     return () => {
//       socket.disconnect();
//     };
//   }, []);

  function sendData(e) {
    e.preventDefault();
    const newReservation = {
      name, email, phonenumber, appointmentDate, departureTime, services, gender
    };
    axios.post(`${process.env.REACT_APP_APPOINTMENT_SERVICE_URL}/appointments`, newReservation)
      .then(() => {
        alert("reservation added");
      }).catch((err) => {
        alert(err);
      });
  }

  const [reservations, setReservations] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  console.log("user",userInfo.user);

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    window.location.href = '/signin';
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_APPOINTMENT_SERVICE_URL}/appointments`);
      setReservations(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeletereservation = async (reservationId) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_APPOINTMENT_SERVICE_URL}/appointments/${reservationId}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    fetchReservations();
  };

  return (
    <div className='customer-page'>
      <div>
      <h2>Notifications</h2>
      {notifications.map((n, index) => (
        <div key={index}>{n.message}</div>
      ))}
    </div>
      <div>
        <button className='bu' onClick={handleLogout}>Log Out</button>
        <div className='group3'></div>
        <div className='lk'> 
          <h1 className="font-title81">Welcome</h1>
          <h1>{userInfo.user.name}</h1>
          <p>Email: {userInfo.user.email}</p>
        </div>
        <div className="hero-image81">  
          <div className="hero-text81"></div>
        </div>
        <div className='res'>
          <h1>Your Reservation List</h1>
          <table className="table table-striped t1">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Gender</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>appointmentDate</th>
                <th>departureTime</th>
                <th>services</th>
              </tr>
            </thead>
            <tbody>
              {reservations.filter(reservation => reservation.email === userInfo.user.email).map((reservation) => (
                <tr key={reservation._id}>
                  <td>{reservation.name}</td>
                  <td>{reservation.gender}</td>
                  <td>{reservation.email}</td>
                  <td>{reservation.phonenumber}</td>
                  <td>{reservation.appointmentDate}</td>
                  <td>{reservation.departureTime}</td>
                  <td>{reservation.services}</td>
                  <td>
                    <Link to={`/updateReswindowCus/${reservation._id}`} state={{ reservation: reservation }}>
                      <img src={require('./images/Group5.png')} alt="Edit" />
                    </Link>
                  </td>
                  <td>
                    <button className='b1' onClick={() => handleDeletereservation(reservation._id)}>
                      <img src={require('./images/Group6.png')} alt="Delete" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='x yyyy'>
          <h1 className='titleRes'>Add Reservation</h1>
          <form className="form container" onSubmit={sendData}>
            <div class="row mb-4">
              <div class="col">
                <label for="formGroupExampleInput" class="form-label label1">NAME</label>
                <input type="text" class="form-control border border-dark" onChange={e => setName(e.target.value)} placeholder="Type Name" aria-label="Name" />
              </div>
              <div class="col">
                <label for="formGroupExampleInput" class="form-label label1">GENDER</label>
                <div class="form-check kk">
                  <input class="form-check-input border border-dark" onChange={e => setgender(e.target.value)} type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Male" />
                  <label class="form-check-label ll" for="flexRadioDefault1">Male</label>
                </div>
                <div class="form-check kk">
                  <input class="form-check-input border border-dark" onChange={e => setgender(e.target.value)} type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Female" />
                  <label class="form-check-label ll" for="flexRadioDefault2">Female</label>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label for="formGroupExampleInput" class="form-label">EMAIL</label>
              <input type="email" placeholder="Type Email" className="form-control border border-dark" id="exampleInputEmail1" onChange={e => setEmail(e.target.value)} aria-describedby="emailHelp" />
            </div>
            <div className="mb-4">
              <label for="formGroupExampleInput" class="form-label">PHONE NUMBER</label>
              <input type="text" placeholder="Phone Number" aria-label="Phonenumber" onChange={e => setPhonenumber(e.target.value)} className="form-control border border-dark" />
            </div>
            <div className="mb-4">
              <label for="formGroupExampleInput" class="form-label">APPOINTMENT DATE</label>
              <input type="date" aria-label="First name" onChange={e => setappointmentDate(e.target.value)} className="form-control border border-dark" />
            </div>
            <div className="mb-4">
              <label for="formGroupExampleInput" class="form-label">ESTIMATED DEPARTURE TIME</label>
              

<input type="date" aria-label="First name" onChange={e=>setappointmentDate(e.target.value)} className="form-control border border-dark"/>

</div>

<div className="mb-4  ">
<label for="formGroupExampleInput" class="form-label ">ESTIMATED DEPATURE TIME</label>
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

<button type="submit"   className="btn btn-primary">Submit</button>

</form>

</div>

</div>
    </div>
    
  );
}

export default CustomerPage;