import React from 'react';
import LogoTec from '../img/LogoTec.svg';

function LandingPage() {
  return (
    <nav className="navbar navbar-expand-lg NavBar-custom">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"> 
        <img src= {LogoTec} className="Applogo red" alt="LogoTeC" /> FinancialTech</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav ">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                <a className="nav-link" href="#">Servicios</a>
                <a className="nav-link" href="#">Sobre Nosotros</a>
              </div>
            </div>
      </div>
    </nav>
  );
}

export default LandingPage;