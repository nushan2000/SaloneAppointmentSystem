import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const UpdateWindow = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const customer = location.state?.customer || {
    name: '',
    gender: '',
    phonenumber: '',
    email: '',
  };

  const [editedCustomer, setEditedCustomer] = useState(customer);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCustomer({
      ...editedCustomer,
      [name]: value,
    });
  };

  const handleUpdateCustomer = async () => {
    try {
      console.log("Attempting to update customer:", editedCustomer);
    
      // Send a PUT request to update the customer data
      await axios.put(
        `http://localhost:8070/customer/update/${editedCustomer._id}`,editedCustomer
      );
      console.log("Customer updated successfully.");

      // Use navigate to go back to the admin page after updating
      navigate('/admin');
    } catch (error) {
      console.error("Error updating customer:", error);
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
            value={editedCustomer.name}
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
            value={editedCustomer.gender}
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
            value={editedCustomer.phonenumber}
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
            value={editedCustomer.email}
            onChange={handleInputChange}
            className="form-control"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <button type="button" onClick={handleUpdateCustomer} className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

const Container = styled.div`
  height: 100px;
  width: 30%;
  top: 25%;
  right: 50%;
  margin-right: 100px;
  justify-content: center;
  align-items: center;
  background-color: #f4abab;
  position: relative;
  display: flex;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2);
`;

export default UpdateWindow;
