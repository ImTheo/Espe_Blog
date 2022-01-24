import React from "react";
import sun from '../../src/loginAssets/sun.svg'
import moon from '../loginAssets/half-moon.png'
import "./Login.css"

const Login = () => {
  return (
    <div>
      <body>
        <input type="radio" name="dark-ligth" id="d-mode" checked />
        <label for="d-mode">
          <img src={sun} id="img" />
        </label>
        <input type="radio" name="dark-ligth" id="l-mode" />
        <label for="l-mode">
          <img src={moon} id="img" />
        </label>
        <div class="container">
          <div class="boxLog">
            <h1>Inicia Sesion</h1>
            <form id="form"></form>
            <label class="labelUser">Usuario</label>
            <p>
              <input
                class="userBox"
                maxlength="100"
                name="usuario"
                type="text"
              />
            </p>
            <label class="labelPassword">Contraseña</label>
            <p>
              <input
                class="userBox"
                minlength="50"
                name="password"
                type="password"
              />
            </p>
            <p>
              ¿No tiene cuenta? <a href="register.html">Regístrate</a>
            </p>
          </div>

          <div class="botones">
            <input class="btn" type="submit" value="Iniciar Sesion" />
            <button class="btn-google" id="btn_google">
              Inicia con Google
            </button>
          </div>
        </div>
        <div class="logo"></div>
      </body>
    </div>
  );
};

export default Login;
