import React from "react";
import imgPng from '../img/FinancialTecMinimal.svg'

function Cards() {
    return (
            <div className="card">
              <img className="card-img-top" src={imgPng} alt="Title" />
              <div className="card-body">
                <h4 className="card-title">Asesoría Financiera</h4>
                <p className="card-text text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quis vel dolor sapiente repudiandae quidem, doloremque beatae fuga rerum quod totam nihil maxime dignissimos iste consequuntur. Et quo error officiis!</p>
                <a name="" id="" class="btn btn-custome" href="/" role="button">Contactar</a>
              </div>
            </div>
    )
}

export default Cards