import React from 'react';
import { Link } from 'react-router-dom';
import profileLogo from '../../utils/logos/profile.png';

function HomepageHeader() {
    return (
        <header>
            <nav>
                <ul id='nav-list'>
                    <li className='nav__link'>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className='nav__link'>
                        <a href='#news-container'>Noticias</a>
                    </li>
                    <li className='nav__link'>
                        <Link to="/user">
                        <img className='nav__logo' src={profileLogo} alt='/' />
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
            <label id='darkmode-btn'>
                <input id='darkmode__in' type="checkbox"></input>
                <span id='darkmode__check'></span>
            </label>
        </header>
    );
}

export default HomepageHeader;