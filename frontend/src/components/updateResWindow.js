
import React, { useState} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import axios from 'axios';

const UpdateResWindow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const reservation = location.state?.reservation || {
    name: '',
    gender: '',
    phonenumber: '',
    email: '',
    appointmentDate:'',
    departureTime:'',
    servises:''
  };

  const [editedreservation, setEditedreservation] = useState(reservation);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedreservation({
      ...editedreservation,
      [name]: value,
    });
  };

  const handleUpdatereservation = async () => {
    try {
      console.log("Attempting to update reservation:", editedreservation);
    
      // Send a PUT request to update the reservation data
      await axios.put(
        `http://localhost:8080/reservation/update/${editedreservation._id}`,editedreservation
      );
      console.log("reservation updated successfully.");

      // Use navigate to go back to the admin page after updating
      navigate('/admin');
    } catch (error) {
      console.error("Error updating reservation:", error);
    }
  };

 

  return (
    <div className="nushan">
      <form className="form71">
        <img className="img-log71" src={require('./images/logo.jpg')} alt="Logo" />
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={editedreservation.name}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={editedreservation.gender}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phonenumber" className="form-label">
            Phonenumber
          </label>
          <input
            type="text"
            id="phonenumber"
            name="phonenumber"
            value={editedreservation.phonenumber}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={editedreservation.email}
            onChange={handleInputChange}
            className="form-control"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="appointmentDate" className="form-label">
            AppointmentDate
          </label>
          <input
            type="text"
            id="appointmentDate"
            name="appointmentDate"
            value={editedreservation.appointmentDate}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="departureTime" className="form-label">
            DepartureTime
          </label>
          <input
            type="text"
            id="departureTime"
            name="departureTime"
            value={editedreservation.departureTime}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="servises" className="form-label">
            Servises
          </label>
          
          <select class="form-select border border-dark" value={editedreservation.servises}
            onChange={handleInputChange}  aria-label="Default select example">
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
        
        <button type="button" onClick={handleUpdatereservation} className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};



export default UpdateResWindow;
