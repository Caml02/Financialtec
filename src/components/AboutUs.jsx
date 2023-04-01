import React from 'react';
import AboutImg from '../img/FinancialTecMinimal.svg'


function AboutUs() {
    return(
        <div className="about-us" id="aboutUs">
            <div className="container">
                <div className="row">
                <div className="col-lg-6">
                    <h2>FinancialTec</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper eleifend risus ac bibendum. Nulla malesuada purus elit, a fringilla lectus tincidunt ut.</p>
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                </div>
                <div className="col-lg-6">
                    <img src={AboutImg} alt="Finance" className="img-fluid" style={{borderRadius: "10%"}}/>
                </div>
                </div>
            </div>
        </div>
    ); 
}


export default AboutUs;
