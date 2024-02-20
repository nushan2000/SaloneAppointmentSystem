
import './css/signin.css'
import './css/signup.css'
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate} from "react-router-dom";

export default function Signup() {

  const [name, setName] = useState('');
  const [gender, setGender] = useState('');

  
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function sendData(e){
    e.preventDefault();

    
    
    const newCustomer={
        name,
        gender,
        email,
        phonenumber,
        password
    }
    axios.post("http://localhost:8070/customer/signup",newCustomer).then(()=>{
        alert("user Added")
        
        navigate('/signin');
    }).catch((err)=>{
        alert(err)
    })

  }






  return (
    <div>
        <div className='signup'>
        <div class="row62">
    <div class="column71" >
        
    <img className="img71" src={require('./images/signin.png')} alt='Freedom Blog'></img>
    <div className='text71'>
        <h1 >Sign Up</h1>
        </div>
        
        
        
        
    
    
    </div>
    <div class="column72" >
      
    <form className='form71'>
    <img className="img-log71" src={require('./images/logo.jpg')}></img>
    <div class="mb-3">
    <label for="exampleInputname" class="form-label">Name</label>
    <input type="Name" onChange={(e) => setName(e.target.value)} class="form-control border border-dark" />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputgender" class="form-label">Gender</label>
    <input type="email" class="form-control border border-dark" onChange={(e) => setGender(e.target.value)} />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputgender" class="form-label">Phonenumber</label>
    <input type="email" class="form-control border border-dark" onChange={(e) => setPhonenumber(e.target.value)} />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control border border-dark" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control border border-dark" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)}/>
  </div>
  
  <button type="Sign In" class="btn btn-primary" onClick={sendData}>SignUp</button>
</form>
    </div>
  </div>
  </div>
  </div>
  )
}
