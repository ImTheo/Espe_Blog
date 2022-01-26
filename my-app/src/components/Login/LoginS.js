import React from "react";
import sun from "../../utils/images/sun.svg";
import moon from "../../utils/images/half-moon.png";
import "../../styles/LoginS.css";

function Login() {
  return (
    <div className="LoginS-bodylog">
    <input type="radio" name="LoginS-dark-ligth" id="LoginS-d-mode" defaultChecked />
    <label htmlFor="LoginS-d-mode">
      <img src={sun} id="LoginS-img" />
    </label>
    <input type="radio" name="LoginS-dark-ligth" id="LoginS-l-mode" />
    <label htmlFor="LoginS-l-mode">
      <img src={moon} id="LoginS-img" />
    </label>
    <div className="LoginS-container">
      <div className="LoginS-boxLog">
        <h1>Inicia Sesion</h1>
        <form id="LoginS-form" />
        <label className="LoginS-labelUser">Usuario</label>
        <p>
          <input className="LoginS-userBox" maxLength={100} name="usuario" type="text" />
        </p>
        <label className="LoginS-labelPassword">Contraseña</label>
        <p>
          <input className="LoginS-userBox" minLength={50} name="password" type="password" />
        </p>
        <p>
          ¿No tiene cuenta? <a href="register">Regístrate</a>
        </p>
      </div>
      <div className="LoginS-botones">
        <input className="LoginS-btn" type="submit" defaultValue="Iniciar Sesion" />
        <button className="LoginS-btn-google" id="LoginS-btn_google">
          Inicia con Google
        </button>
      </div>
      <div className="LoginS-logo" />
    </div>
  </div>
  );
}

export default Login;
