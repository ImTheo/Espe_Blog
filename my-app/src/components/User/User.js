import React, {useState} from "react";

import HomepageHeader from "../Homepage/HomepageHeader";
import HomepageFooter from "../Homepage/HomepageFooter";
import Posts from "./Posts";
import imageBackground from "../../utils/images/Portada_inicio.jpeg"
import userLogo from "../../utils/logos/pngwing.com.png"

function EditUser(props) {
    var aux = document.getElementsByClassName('editContainer');
    return (
        <div className='editContainer' style={{ display: props.value }}>
            <label>Nombre de ususario</label>
            <input type={'text'}></input>
            <img alt='' />
            <label>Foto de perfil</label>
            <button>Guardar</button>
            <button onClick={()=>aux[0].style.display='none'}>Cancelar</button>
        </div>
    );
}

function User() {
    const [show, setShow] = useState('none');
    return (
        <div>
            <HomepageHeader />
            <img id='img-bkg' src={imageBackground} alt='' />
            <div id='user-container'>
                <div id='user-data'>
                    <img id='user-img' src={userLogo} alt='' />
                    <label className='user-lbl'>Nombre de usuario</label>
                    <label className='user-lbl'>usuario@espe.edu.ec</label>
                    <button onClick={() => setShow('')}>Editar Perfil</button>
                    <EditUser value={show} />
                </div>
                <div id='user-activity'>
                    <label className='user-lbl'>Comentarios: #</label>
                    <label className='user-lbl'>Preguntas: #</label>
                    <h3 className='user-h3'>Publicaciones activas</h3>
                    <Posts />
                    <button className='user-btn'>ver más</button>
                </div>
            </div>
            <HomepageFooter />
        </div>
    );
}

export default User;