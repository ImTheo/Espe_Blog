import React from 'react';

function Copyright(){
    return (
        <div id="copyright">
            <h3 id='copyright__title'>Copyright</h3>
            <p id='copyright__p'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.</p>
        </div>
    );
}

function SocialNetworks(){
    return (
        <div id='social-networks'>
            <h3 id='social-networks__title'>Síguenos En Nuestras Redes</h3>
            <label className='social-networks__lbl'>Facebook</label>
            <label className='social-networks__lbl'>Instagram</label>
            <label className='social-networks__lbl'>Twitter</label>
        </div>
    );
}

function MoreInformation(){
    return (
        <div id='more-information'>
            <h3 id='more-information__title'>Más Información</h3>
            <div>
                <img className='more-information__img' src={'/'} alt='/'></img>
                <label id='more-information__lbl'>123-123-123</label>
            </div>
            <div>
                <img className='more-information__img' src={'/'} alt='/'></img>
                <p className='more-information__p'>Correoejemplo@Gmail.com<br/>Correoejemplo2@Gmail.com</p>
            </div>
            <div>
                <img className='more-information__img' src={'/'} alt='/'></img>
                <p className='more-information__p'>Sangolqui, Ecuador<br/>062 123 123</p>
            </div>
        </div>
    );
}

function HomepageFooter(){
    return (
        <footer>
            <div id='information-container'>
                <Copyright />
                <SocialNetworks />
                <MoreInformation />
            </div>
            <p id='copyright-p'>&copy, copyright @2021</p>
        </footer>
    );
}

export default HomepageFooter;