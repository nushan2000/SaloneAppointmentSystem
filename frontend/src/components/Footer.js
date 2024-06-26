import React from "react";
import './css/footer.css';
import logo from './images/logo.jpg';
import instaIcon from './images/insta.png';
import facebookIcon from './images/facebook.png';

const Footer = () => {
  return (
    <div className="main-footer ccc">
      <div className="container">
        <div className="row">
          <div className="col">
            <ol className="s">
              <li> Come Visit Us!</li>
              <li> 41/A, Siyambalagoda,</li>
              <li> Beliatta</li>
              <li> +94-762873633</li>
              <li> eanushanhansana@gmail.com</li>
              <div className="ss"></div>
            </ol>
          </div>
          <div className="col">
            {/* Use imported logo variable */}
            <img className="img-log" src={logo} alt="Logo"></img>
          </div>
          <div className="col">
            <ol className="s">
              <li> Home</li>
              <li> Salon</li>
              <li> Services</li>
              <li> Reservations</li>
              <li> Policies</li>
            </ol>
          </div>
        </div>
        <div className="ss">
          {/* Use imported icon variables */}
          <li><img className="img-log2" src={instaIcon} alt="Instagram"></img></li>
          <li><img className="img-log2" src={facebookIcon} alt="Facebook"></img></li>
        </div>
        <hr className="line"></hr>
      </div>
    </div>
  );
}

export default Footer;
