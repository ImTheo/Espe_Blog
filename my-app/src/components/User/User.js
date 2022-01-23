import React, {useState} from "react";

import HomepageHeader from "../Homepage/HomepageHeader";
import HomepageFooter from "../Homepage/HomepageFooter";
import Posts from "./Posts";
import imageBackground from "../../utils/images/user-bkg.jpg"
import userLogo from "../../utils/logos/pngwing.com.png"

function EditUser(props) {
    var aux = document.getElementsByClassName('editContainer');
    return (
        <div className='edit-container' style={{ display: props.value }}>
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
            <div id='user__container'>
                <div id='user__data'>
                    <img id='user__img' src={userLogo} alt='' />
                    <label className='user__lbl'>Nombre de usuario</label>
                    <label className='user__lbl'>usuario@espe.edu.ec</label>
                    <button onClick={() => setShow('')}>Editar Perfil</button>
                    <EditUser value={show} />
                </div>
                <div id='user__activity'>
                    <label className='user__lbl'>Comentarios: #</label>
                    <label className='user__lbl'>Preguntas: #</label>
                    <h3 id='user__h3'>Publicaciones activas</h3>
                    <Posts />
                    <button className='user__btn'>ver más</button>
                </div>
            </div>
            <HomepageFooter />
        </div>
    );
}

export default User;