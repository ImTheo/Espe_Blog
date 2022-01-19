import React from 'react';

function Copyright(){
    return (
        <div id="copyright">
            <h3>Copyright</h3>
            <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat.</p>
        </div>
    );
}

function SocialNetworks(){
    return (
        <div>
            <label>Facebook</label>
            <label>Instagram</label>
            <label>Twitter</label>
        </div>
    );
}

function MoreInformation(){
    return (
        <div className='more-information'>
            <div>
                <img src={'/'} alt='/'></img>
                <label>123-123-123</label>
            </div>
            <div>
                <img src={'/'} alt='/'></img>
                <p>Correoejemplo@Gmail.com<br/>Correoejemplo2@Gmail.com</p>
            </div>
            <div>
                <img src={'/'} alt='/'></img>
                <p>Sangolqui, Ecuador<br/>062 123 123</p>
            </div>
        </div>
    );
}

function HomepageFooter(){
    return (
        <footer className='homepage-footer'>
            <Copyright />
            <SocialNetworks />
            <MoreInformation />
            <h2>&copy, copyright @2021</h2>
        </footer>
    );
}

export default HomepageFooter;