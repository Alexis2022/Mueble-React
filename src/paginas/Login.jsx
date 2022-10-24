import React, { useState } from "react";
import "../assets/style/login.css";
import { FaUserSlash } from "react-icons/fa";


function Login() {

  let [mostrar, setMostrar] = useState(true);

  let ver = (e)=>{
    e.preventDefault();
    setMostrar(mostrar = false)
  }

  return (
    <div className="contenedor">
      <div className={ mostrar ? "no-cuenta-no-creada" : "cuenta-no-creada"}>
        <h3>No se registró tu cuenta solo es de prueba</h3>
        <div className="icon-no-registro">
          <FaUserSlash />
        </div>
      </div>
      <div className={mostrar ?  "contenedor-cuenta" : "no-mostrar"}>
        <div className="contenedor-crear">
          <form action="" className="form">
            <span className="titulo-form">Crear Cuenta</span>
            <div className="contenedor-input">
              <input type="text" className="form-input" placeholder="Nombre" />
            </div>
            <div className="contenedor-input">
              <input type="text" className="form-input" placeholder="Correo Electronico" />
            </div>
            <div className="contenedor-input">
              <input type="text" className="form-input" placeholder="Contraseña" />
            </div>
            <button className="bt-form" onClick={ver}>CREAR</button>
          </form>
        </div>
        <div className="contenedor-iniciar">
          <form action="" className="form">
            <span className="titulo-form">Acceder</span>
            <div className="contenedor-input">
              <input type="text" className="form-input" placeholder="Nombre o Correo Electronico" />
            </div>
            <div className="contenedor-input">
              <input type="text" className="form-input" placeholder="Contraseña" />
            </div>
            <button className="bt-form" onClick={ver}>CREAR</button>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Login