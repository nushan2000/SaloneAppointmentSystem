import React from "react";
import './css/footer.css';

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
            {/* Add alt attribute to describe the image */}
            <img className="img-log" src={require('./images/logo.jpg')} alt="Logo"></img>
          </div>
          <div className="col">
            <ol className="s">
              <li> Home</li>
              <li> Salone</li>
              <li> Services</li>
              <li> Reservations</li>
              <li> Policies</li>
            </ol>
          </div>
        </div>
        <div className="ss">
          {/* Add alt attributes to describe the images */}
          <li><img className="img-log2" src={require('./images/insta.png')} alt="Instagram"></img></li>
          <li><img className="img-log2" src={require('./images/facebook.png')} alt="Facebook"></img></li>
        </div>
        <hr className="line"></hr>
      </div>
    </div>
  );
}

export default Footer;
