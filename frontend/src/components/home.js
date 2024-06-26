import React from "react";
import './css/home.css';
import { useNavigate } from "react-router-dom";
import home2Image from './images/home2.png';
import carouselImage1 from './images/carouse/download.png';
import carouselImage2 from './images/carouse/download (1).png';
import carouselImage3 from './images/carouse/images.png';
import carouselImage4 from './images/carouse/images (1).png';
import carouselImage5 from './images/carouse/images (2).png';
import serviceImage1 from './images/home/1.png';
import serviceImage2 from './images/home/2.png';
import serviceImage3 from './images/home/3.png';
import serviceImage4 from './images/home/8.png';
import salonInteriorImage from './images/home/4.png';
import teamImage from './images/home/mmmm.png';

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className="hero-image">
          <div className="fade-in-image">
            <div className="group"></div>
            <div className="hero-text">
              <h1 className="font-title">SALON NH</h1>
              <button className="button-5 btn-one" onClick={() => navigate("/add")}>Book Now</button>
            </div>
          </div>
        </div>

        <p className="text2">Luxury Natural Bridal Makeup London, Surrey and Kent. Surrey based bridal hair and makeup artist specialist creating modern, effortless designs.</p>
      </div>

      <div className="home2">
        <img src={home2Image} alt="Salon interior" />
      </div>

      <div className="color">
        <div className="">
          <div className="carousel-inner">
            <div className="carousel-item active img11">
              <img src={carouselImage1} className="yy" alt="Carousel slide 1" />
            </div>
            <div className="carousel-item img11">
              <img src={carouselImage2} className="yy" alt="Carousel slide 2" />
            </div>
            <div className="carousel-item img11">
              <img src={carouselImage3} className="yy" alt="Carousel slide 3" />
            </div>
            <div className="carousel-item img11">
              <img src={carouselImage4} className="yy" alt="Carousel slide 4" />
            </div>
            <div className="carousel-item img11">
              <img src={carouselImage5} className="yy" alt="Carousel slide 5" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next nextt" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div>
        <img className="h" src={salonInteriorImage} alt="Salon Interior" />
        <div className="rowww">
          <div className="column">
            <img className="imgg" src={teamImage} alt="Team" />
          </div>
          <div className="column">
            <p className="text2 coll">We can guarantee you have never received as many compliments as you will, after you book a visit with us.</p>
          </div>
        </div>

        <div className="row1">
          <div className="column1">
            <div className="container">
              <img src={serviceImage1} alt="Service 1" className="image4 imgg2" />
              <div className="overlay">
                <div className="text"><button className="button">About</button></div>
              </div>
            </div>
          </div>
          <div className="column1">
            <div className="container">
              <img src={serviceImage2} alt="Service 2" className="image4 imgg2" />
              <div className="overlay">
                <div className="text"><button className="button">Team</button></div>
              </div>
            </div>
          </div>
          <div className="column1">
            <div className="container">
              <img src={serviceImage3} alt="Service 3" className="image4 imgg2" />
              <div className="overlay">
                <div className="text"><button className="button">Reservation</button></div>
              </div>
            </div>
          </div>
          <div className="column1">
            <div className="container">
              <img src={serviceImage4} alt="Service 4" className="image4 imgg2" />
              <div className="overlay">
                <div className="text"><button className="button">Services</button></div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="row row2">
            <div className="btn-group col"></div>
          </div>
        </div>

        <div className="boxx border border-dark">
          <p className="text2">I invite you to join my exclusive email list and receive expert tips & tricks in the lead up to your wedding</p>
          <div className="row">
            <div className="col">
              <input type="email" className="form-control border border-dark" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp" />
            </div>
            <div className="col">
              <input type="text" className="form-control border border-dark" placeholder="Name" aria-label="Name" />
            </div>
            <div className="col">
              <button type="submit" className="btn btn-primary form-control">Submit</button>
            </div>
            <div className="boxx-back"></div>
          </div>
        </div>
      </div>
    </>
  );
}
