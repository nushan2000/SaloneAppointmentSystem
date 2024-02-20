
import './App.css';

import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import About from './components/About';
import Navbar from './components/Navbar';
import AddReservation from './components/Reservation';
import home from './components/home';
import Footer from './components/Footer';
import Services from './components/Services';
import Team from './components/Team';
import policies from './components/Policies';
import Signin from './components/Signin';
import Signup from './components/signup';
import admin from './components/admin';
import customer from './components/customer';

import UpdateWindow from './components/UpdateWindow';
import UpdateResWindow from './components/updateResWindow';
import UpdateResWindowCus from './components/updateResWindowCus';

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
