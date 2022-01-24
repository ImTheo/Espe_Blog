import React from "react";

function Form(){
    return(
        <form id="form-register">
            <label className="form__lbl">Usuario</label>
            <input className="form__in"></input>
            <label className="form__lbl">Contraseña</label>
            <input className="form__in"></input>
            <label>¿No tienes Cuenta? Registrate</label>
            <button className="form__btn">Iniciar Sesion</button>
        </form>
    );
}

function LoginForm(){
    return(
        <div id="login-form">
            <label>Iniciar Sesion</label>
            <Form />
            <div>
                <img src="/" alt="/"></img>
                <button>Iniciar con Google</button>
            </div>
        </div>
    );
}

function Login(){
    return(
        <div>
            <img src="/" alt="/"></img>
            <LoginForm />
        </div>
    );
}

export default Login;