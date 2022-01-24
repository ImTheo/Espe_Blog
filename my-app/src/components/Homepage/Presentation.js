import React from "react";
import { Link } from 'react-router-dom'

import logo from '../../utils/logos/Logo.png';
import bodyBackground from '../../utils/images/Portada_inicio.jpeg'

function Presentation(){
    return(
        <div id="presentation">
            <img id="presentation-img" src={bodyBackground} alt=""></img>
            <div id="presentation__item">
                <img id="presentation-logo" src={logo} alt=""></img>
                <a className="presentation__link" href="/">Saber Más</a>
                <Link className="presentation__link" to="/register">Regístrarse</Link>
            </div>
        </div>
    );
}

export default Presentation;