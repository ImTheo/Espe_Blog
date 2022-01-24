import React from 'react';
import '../../styles/register.css'
import halfmoon from '../../utils/logos/half-moon.png'
import sun from '../../utils/logos/sun.png'


function Register()
{
    return(
    <div>
        <body>
    
    <input type="radio" name="dark-ligth" id="d-mode" checked></input>
    <label for="d-mode"><img src={sun} id="img"/></label>
    <input type="radio" name="dark-ligth" id="l-mode"></input>
    <label for="l-mode"><img src={halfmoon} id="img"/></label>

    <div class="card">
        <div class="content">

        <form  id="form">
            <h2><center>Crea tu cuenta gratis</center></h2>
            <label class="label">Nombre completo</label>
            <input type="text" placeholder="Enter your Full Name here" required></input>
            <br></br>
            <label class="label">Correo</label>
            <input type="email" placeholder="Enter your Email here" required></input>
            <br></br>
            <label class="label">Contraseña</label>
            <input type="password" placeholder="Enter your Password here" required></input>
            <br></br>   
            <input type="submit" value="Crear Cuenta" class="btn"></input>
            <br></br>
            <label class="label"> <center>Ya tienes cuenta? <a href="login.html">Inicia sesión</a></center></label>
            <label><center>- O -</center></label>
            <div>
                <center><button class="btn-google" id="btn_google">Inicia con Google</button></center>
            </div>
        </form>

    </div>
    </div>   
    
    <div id="imge"></div>
    </body>
    </div>

    );
}
export default Register;