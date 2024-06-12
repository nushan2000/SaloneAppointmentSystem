import './css/home.css';
import { useNavigate } from "react-router-dom";

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
        <img src={require('./images/home2.png')} alt="Salon interior" />
      </div>

      <div className="color">
        <div className="">
          <div className="carousel-inner">
            <div className="carousel-item active img11">
              <img src={require('./images/carouse/download.png')} className="yy" alt="Carousel image 1" />
            </div>
            <div className="carousel-item img11">
              <img src={require('./images/carouse/download (1).png')} className="yy" alt="Carousel image 2" />
            </div>
            <div className="carousel-item img11">
              <img src={require('./images/carouse/images.png')} className="yy" alt="Carousel image 3" />
            </div>
            <div className="carousel-item img11">
              <img src={require('./images/carouse/images (1).png')} className="yy" alt="Carousel image 4" />
            </div>
            <div className="carousel-item img11">
              <img src={require('./images/carouse/images (2).png')} className="yy" alt="Carousel image 5" />
            </div>
            <div className="carousel-item img11">
              <img src={require('./images/carouse/images (2).png')} className="yy" alt="Carousel image 6" />
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
        <img className="h" src={require('./images/home/4.png')} alt="Decorative" />
        <div className="rowww">
          <div className="column">
            <img className="imgg" src={require('./images/home/mmmm.png')} alt="Decorative" />
          </div>
          <div className="column">
            <p className="text2 coll">We can guarantee you have never received as many compliments as you will, after you book a visit with us.</p>
          </div>
        </div>

        <div className="row1">
          <div className="column1">
            <div className="container">
              <img src={require('./images/home/1.png')} alt="Service 1" className="image4 imgg2" />
              <div className="overlay">
                <div className="text"><button className="button">About</button></div>
              </div>
            </div>
          </div>
          <div className="column1">
            <div className="container">
              <img src={require('./images/home/2.png')} alt="Service 2" className="image4 imgg2" />
              <div className="overlay">
                <div className="text"><button className="button">Team</button></div>
              </div>
            </div>
          </div>
          <div className="column1">
            <div className="container">
              <img src={require('./images/home/3.png')} alt="Service 3" className="image4 imgg2" />
              <div className="overlay">
                <div className="text"><button className="button">Reservation</button></div>
              </div>
            </div>
          </div>
          <div className="column1">
            <div className="container">
              <img src={require('./images/home/8.png')} alt="Service 4" className="image4 imgg2" />
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
