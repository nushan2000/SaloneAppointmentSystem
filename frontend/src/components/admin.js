import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import './css/admin.css';

function Admin() {
  const handleLogout = () => {
    // Clear user session data when logging out
    localStorage.removeItem('userInfo');
    // Redirect to the login page or any other suitable page
    window.location.href = '/signin'; // Redirect to the login page
  };
  
  const [customers, setCustomers] = useState([]);
  const [reservations, setReservations] = useState([]);
  
  useEffect(() => {
    fetchCustomers();
  }, []);

  async function fetchCustomers() {
    try {
      const response = await axios.get('http://localhost:8080/customer/customers');
      setCustomers(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchReservation();
  }, []);

  async function fetchReservation() {
    try {
      const response = await axios.get('http://localhost:8080/reservation/reservation');
      setReservations(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleDeleteCustomer = async (customerId) => {
    try {
      await axios.delete(`http://localhost:8080/customer/customers/${customerId}`);
      fetchCustomers();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteReservation = async (reservationId) => {
    try {
      await axios.delete(`http://localhost:8080/reservation/reservation/${reservationId}`);
      fetchReservation();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='nn'>
      <div className='tex51 xx'>
        <button onClick={handleLogout}>Log Out</button>
        <h1>Customer List</h1>
        <table className="table table-striped t1">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(customer => (

              <tr key={customer._id}>
                <td>{customer.name}</td>
                <td>{customer.gender}</td>
                <td>{customer.email}</td>
                <td>{customer.phonenumber}</td>
                <td>
                  <Link className="mm" to={`/updatewindow/${customer._id}`} state={{ customer: customer }}>
                    <img src={require('./images/Group5.png')} alt="Edit" />
                  </Link>
                </td>
                <td>
                  <button className='b1' onClick={() => handleDeleteCustomer(customer._id)}>
                    <img src={require('./images/Group6.png')} alt="Delete" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1>Reservation List</h1>
        <table className="table table-striped t1">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Appointment Date</th>
              <th>Departure Time</th>
              <th>Services</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation) => (
              <tr key={reservation._id}>
                <td>{reservation.name}</td>
                <td>{reservation.gender}</td>
                <td>{reservation.email}</td>
                <td>{reservation.phonenumber}</td>
                <td>{reservation.appointmentDate}</td>
                <td>{reservation.departureTime}</td>
                <td>{reservation.services}</td>
                <td>
                  <Link to={`/updateReswindow/${reservation._id}`} state={{ reservation: reservation }}>
                    <img src={require('./images/Group5.png')} alt="Edit" />
                  </Link>
                </td>
                <td>
                  <button className='b1' onClick={() => handleDeleteReservation(reservation._id)}>
                    <img src={require('./images/Group6.png')} alt="Delete" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
