import React from "react";
import './css/footer.css'


const Footer=()=>{
    return(
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
                            <div className="ss">
                            
                            </div>
                        </ol>

                    </div>
                    <div className="col">
                    <img className="img-log" src={require('./images/logo.jpg')}></img>

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
                <li > <img className="img-log2" src={require('./images/insta.png')}></img></li>
                            <li > <img className="img-log2" src={require('./images/facebook.png')}></img></li>
                </div>

                <hr className="line"></hr>
            </div>

        </div>
    )
}

export default Footer;