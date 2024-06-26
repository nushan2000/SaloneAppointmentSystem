import React, { useState } from 'react';
import axios from 'axios';
import './css/signin.css';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const sendData = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          'content-type': 'application/json',
        },
      };
      const { data } = await axios.post('http://localhost:8080/customer/logi', {
        email,
        password,
      }, config);
      
      localStorage.setItem('userInfo', JSON.stringify(data));
      if (data.isAdmin) {
        navigate('/admin'); // Redirect to the admin page
      } else {
        navigate('/customer'); // Redirect to the customer page
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Function not used, can be removed to resolve the warning
  // const senData = async (e) => {
  //   console.log(email, password);
  // };

  return (
    <div>
      <div className="signin">
        <div className="row61">
          <div className="column61">
            <img className="img61" src={require('./images/signin.png')} alt="Freedom Blog" />
            <div className="text61">
              <h1>Sign in</h1>
              <button type="Sign In" onClick={() => navigate('/signup')} className="btn btn-outline-dark">Register</button>
            </div>
          </div>
          <div className="column62">
            <form className="form61" onSubmit={sendData}>
              <img className="img-log61" src={require('./images/logo.jpg')} alt="Logo" />
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control border border-dark" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control border border-dark" id="exampleInputPassword1" />
              </div>
              <button type="Sign In" className="btn btn-primary">LogIn</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
