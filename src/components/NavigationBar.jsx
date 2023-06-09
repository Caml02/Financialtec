import React, {useEffect} from 'react';
import LogoTec from '../img/logoTec3.svg';
import ScrollNav from '../helpers/ScrollNav';


function NavigationBar() {
  useEffect(() => {
    ScrollNav();
  }, []);
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"> 
        <img src= {LogoTec} className="Applogo" alt="LogoTeC" /> FinancialTech</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav ">
                <a className="nav-link" href="#aboutUs">Nosotros</a>
                <a className="nav-link" href="#services">Servicios</a>
                <a className="nav-link" href="#financialForm">Contactanos</a>
              </div>
            </div>
      </div>
    </nav>
  );
}

export default NavigationBar;

