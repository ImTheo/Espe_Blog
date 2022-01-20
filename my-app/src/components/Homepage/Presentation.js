import React from "react";

import logo from '../../utils/logos/Logo.png';
import bodyBackground from '../../utils/images/Portada_inicio.jpeg'

function Presentation(){
    return(
        <div id="presentation">
            <img id="presentation-img" src={bodyBackground} alt=""></img>
            <div id="presentation__item">
                <img id="presentation-logo" src={logo} alt=""></img>
                <button>Saber Más</button>
                <button>Regístrarse</button>
            </div>
        </div>
    );
}

export default Presentation;