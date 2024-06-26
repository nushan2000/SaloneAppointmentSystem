import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/About.js';
import Navbar from './components/Navbar.js';
import AddReservation from './components/Reservation.js';
import Home from './components/home.js'; // Renamed to uppercase
import Footer from './components/Footer.js';
import Services from './components/Services.js';
import Team from './components/Team.js';
import Policies from './components/Policies.js';
import Signin from './components/Signin.js';
import Signup from './components/Signup.js';
import Admin from './components/Admin.js';
import Customer from './components/Customer.js';
import UpdateWindow from './components/UpdateWindow.js';
import UpdateResWindow from './components/UpdateResWindow.js';
import UpdateResWindowCus from './components/UpdateResWindowCus.js';

function App() {
  return (

      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="add" element={<AddReservation />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="/" element={<Home />} />
            <Route path="team" element={<Team />} />
            <Route path="policies" element={<Policies />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="admin" element={<Admin />} />
            <Route path="customer" element={<Customer />} />
            <Route path="updatewindow/:id" element={<UpdateWindow />} />
            <Route path="updateReswindow/:id" element={<UpdateResWindow />} />
            <Route path="updateReswindowCus/:id" element={<UpdateResWindowCus />} />
          </Routes>
           <Footer />
        </Router>
    
     
      </div>
  );
}

export default App;
