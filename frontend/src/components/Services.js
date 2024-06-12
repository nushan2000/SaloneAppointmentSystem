import React from 'react';
import './css/Services.css';

export default function Services() {
  return (
    <div>
      <div className="hero-image42"> 
        <div className="fade-in-imagee"></div> 
        <div className="group4"></div>
        <div className="hero-text42">
          <h1 className="font-title42">Services</h1>
        </div>
      </div>
      <img className="l" src={require('./images/home/4.png')} alt="Salon interior" />
      <div className='textsty'>
        <p> Haircuts: $70 – $125</p>
        <p>Single Process: $80 – $110</p>
        <p>Mini Foil: $105 – $195</p>
        <p>Partial Foil: $140 – $225</p>
        <p>Full Foil: $185 – $290</p>
        <p>Toner: $40 – $45</p>
        <p>Half Balayage: $235+</p>
        <p>Full Balayage: $285+</p>
        <p>Formal Styling: $150+ </p>
        <p>Conditioning Treatment: Mixed Upon Consultation $35+</p>
        <p>Extensions: Upon Consultation</p>
        <p>Cezanne Keratin Treatments: </p>
        <p>Express $280+ / </p>
        <p>Classic $420+</p>
        <p>Makeup Application: $150+</p>
      </div>
    </div>
  );
}
