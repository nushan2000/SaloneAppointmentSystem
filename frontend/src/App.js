
import './App.css';

import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import AddReservation from './components/Reservation.js';
import home from './components/home.js';
import Footer from './components/Footer.js';
import Services from './components/Services.js';
import Team from './components/Team.js';
import policies from './components/Policies.js';
import Signin from './components/Signin.js';
import Signup from './components/signup.js';
import admin from './components/admin.js';
import customer from './components/customer.js';

import UpdateWindow from './components/UpdateWindow.js';
import UpdateResWindow from './components/updateResWindow.js';
import UpdateResWindowCus from './components/updateResWindowCus.js';

function App() {
  return (
    
    
    <div className="page-container">
      <div className="content-wrap">
      <Router>
      <Navbar/>
      <Routes>
      <Route path="add" exact Component={AddReservation}/>
      <Route path="about" exact Component={About}/>
      <Route path="services" exact Component={Services}/>
      <Route path="/" exact Component={home}/>
      <Route path="team" exact Component={Team}/>
      <Route path="policies" exact Component={policies}/>
      <Route path="signin" exact Component={Signin}/>
      <Route path="signup" exact Component={Signup}/>
      <Route path="admin" exact Component={admin}/>
      <Route path="customer" exact Component={customer}/>
      <Route path="updatewindow/:id" exact Component={UpdateWindow}/>
      <Route path="updateReswindow/:id" exact Component={UpdateResWindow}/>
      <Route path="updateReswindowCus/:id" exact Component={UpdateResWindowCus}/>
      
      </Routes>
      
      </Router>
      </div>
      <Footer/>
      
      
      
    </div>
    
    
    
    
  );
}

export default App;
