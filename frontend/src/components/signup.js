import './css/signin.css';
import './css/signup.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    const newCustomer = {
      name,
      gender,
      email,
      phonenumber,
      password
    };
    
    axios.post("http://localhost:8080/customer/signup", newCustomer)
      .then(() => {
        alert("User added");
        navigate('/signin');
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <div className='signup'>
        <div className="row62">
          <div className="column71">
            <img className="img71" src={require('./images/signin.png')} alt='Sign In' />
            <div className='text71'>
              <h1>Sign Up</h1>
            </div>
          </div>
          <div className="column72">
            <form className='form71'>
              <img className="img-log71" src={require('./images/logo.jpg')} alt="Logo" />
              <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">Name</label>
                <input type="text" onChange={(e) => setName(e.target.value)} className="form-control border border-dark" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputGender" className="form-label">Gender</label>
                <input type="text" className="form-control border border-dark" onChange={(e) => setGender(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPhonenumber" className="form-label">Phonenumber</label>
                <input type="tel" className="form-control border border-dark" onChange={(e) => setPhonenumber(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control border border-dark" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control border border-dark" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button type="button" className="btn btn-primary" onClick={sendData}>Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
