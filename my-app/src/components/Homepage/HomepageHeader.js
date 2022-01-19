import React from 'react';
import { Link } from 'react-router-dom';
import profileLogo from '../../utils/logos/profile.png';

function HomepageHeader() {
    return (
        <header>
            <nav>
                <ul>
                    <li className='nav__link'>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className='nav__link'>
                        <Link to="/">Noticias</Link>
                    </li>
                    <li className='nav__link'>
                        <Link to="/user">
                        <img className='nav__logo__img' src={profileLogo} alt='/' />
                        </Link>
                    </li>
                    <li className='nav__link'>
                        <Link to="/">Comunidad</Link>
                    </li>
                    <li className='nav__link'>
                        <Link to="/">Blog</Link>
                    </li>
                </ul>
            </nav>
            <img className='nav__img' src={"/"} alt='/' />
        </header>
    );
}

export default HomepageHeader;