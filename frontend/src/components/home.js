import react from "react";
import './css/home.css';
import { useNavigate} from "react-router-dom";



export default function Home(){
  const navigat =useNavigate();
    return(
        <>
        <div>
       <div className="hero-image"> 
       <div className="fade-in-image">
       <div className="group"></div>
       <div className="hero-text">
       
          <h1 className="font-title">SALON NH</h1>
          <button className="button-5 btn-one" role="button" onClick={()=>navigat("/add")}> Book Now</button> 
          </div> 
    </div>    
    
    </div>
    

        <p className="text2">Luxury Natural Bridal Makeup London, Surrey and Kent.
Surrey based bridal hair and makeup artist specialist creating modern, effortless designs.</p>
</div>
<div className="home2"> 
<img  src={require('./images/home2.png')}></img>
    </div>
<div className="color">

    <div  class="">
  <div class="carousel-inner  ">
    <div class="carousel-item active img11">
      <img src={require('./images/carouse/download.png')} class="  yy" alt="..."/>
    </div>
    <div class="carousel-item img11">
      <img src={require('./images/carouse/download (1).png')} class=" yy" alt="..."/>
    </div>
    <div class="carousel-item img11">
      <img src={require('./images/carouse/images.png')} class=" yy" alt="..."/>
    </div>
    <div class="carousel-item img11">
      <img src={require('./images/carouse/images (1).png')} class=" yy " alt="..."/>
    </div>
    <div class="carousel-item img11">
      <img src={require('./images/carouse/images (2).png')} class=" yy" alt="..."/>
    </div>
    <div class="carousel-item img11">
      <img src={require('./images/carouse/images (2).png')} class=" yy" alt="..."/>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next nextt" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
<div>
<img className="h" src={require('./images/home/4.png')}></img> 
<div class="rowww">
  <div class="column" >
  <img className="imgg" src={require('./images/home/mmmm.png')}></img>
  </div>
  <div class="column" >
    
    <p className="text2 coll">We can guarantee you have never received as many compliments as you will, after you book a visit with us.</p>
  </div>
</div>

<div class="row1">
  <div class="column1" >
  <div class="container">
  <img src={require('./images/home/1.png')} alt="Avatar" class="image4 imgg2"></img>
  <div class="overlay">
    <div class="text"><button class="button">About</button></div>
  </div>
</div>
  
  </div>
  <div class="column1" >
  <div class="container">
  <img src={require('./images/home/2.png')} alt="Avatar" class="image4 imgg2"></img>
  <div class="overlay">
    <div class="text"><button class="button">Team</button></div>
  </div>
</div>
  
  </div>
  <div class="column1" >

  <div class="container">
  <img src={require('./images/home/3.png')} alt="Avatar" class="image4 imgg2"></img>
  <div class="overlay">
    <div class="text"><button class="button">Reservation</button></div>
  </div>
</div>
  
  </div>
  <div class="column1" >

<div class="container">
<img src={require('./images/home/8.png')} alt="Avatar" class="image4 imgg2"></img>
<div class="overlay">
  <div class="text"><button class="button">Services</button></div>
</div>
</div>

</div>
</div>
<div>
  <div className="row row2">
  <div class="btn-group col">
  
  
  
  
</div>
  </div>

</div>

<div className="boxx border border-dark">

    <p className="text2">I invite you to join my exclusive email list and receive expert tips & tricks in the lead up to your wedding</p>
    <div class="row">
  <div class="col">
  <input type="email" class="form-control border border-dark" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp"/>
    
  </div>
  <div class="col">
    <input type="text" class="form-control border border-dark" placeholder="Name" aria-label="Name"/>
  </div>
  <div class="col">
    <button type="submit" class="btn btn-primary form-control">Submit</button>
  </div>
  <div className="boxx-back"></div>
</div>

</div>


</div>

    </>
    )}