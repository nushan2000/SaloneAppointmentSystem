import react from "react";
import './css/header.css'

function Header(){
    return(
      
        <nav className="navbar  navbar-expand-lg navbar-dark bg-dark  ">
  <div className="container  ">
    <a className="navbar-brand"  href="/about">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse gl "  id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mm ">
        <li className="nav-item">
          <a className="nav-link active vl text"  aria-current="page" href="/about">Salon</a>
        </li>
        <li className="nav-item">
          <a className="nav-link vl text" href="/servises">Services</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle vl"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Team
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link Reservations vl" href="/add" aria-disabled="true">Reservations</a>
        </li>
        <li className="nav-item">
          <a className="nav-link Policies vl" href="/policies" aria-disabled="true">Policies</a>
        </li>
      </ul>
      <form className=" ms-auto" role="Login" >
        
        <button className="btn btn-outline-success" type="submit">Login</button>
      </form>
    </div>
  </div>
</nav>
    )
}
export default Header;