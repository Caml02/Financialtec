import React, { useState } from "react";

const FinancialForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, phone, service, message });
  };

  return (
    
    <div class="py-5">
      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-md-8 form-container">
            <h1>Contactanos</h1>
              <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    <label for="name">Nombre</label>
                    <input type="text" class="form-control" id="name" placeholder="Ingresa tu nombre"/>

                  </div>
                  <div class="form-group">
                    <label for="email">Correo electrónico</label>
                    <input type="email" class="form-control" id="email" placeholder="Ingresa tu correo electrónico"/>
                  </div>
                  <div class="form-group">
                    <label for="phone">Teléfono</label>
                    <input type="tel" class="form-control" id="phone" placeholder="Ingresa tu número de teléfono"/>
                  </div>
                  <div class="form-group">
                    <label for="service">Servicio</label>
                    <select class="form-control" id="service">
                      <option value="">Selecciona un servicio</option>
                      <option value="servicio1">Servicio 1</option>
                      <option value="servicio2">Servicio 2</option>
                      <option value="servicio3">Servicio 3</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="message">Mensaje</label>
                    <textarea class="form-control" id="message" rows="3"></textarea>
                  </div>
                  <button type="submit" class="btn btn-custome">Enviar</button>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialForm;
