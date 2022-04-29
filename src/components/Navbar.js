import React from 'react';
import reactLogo from '../images/react-logo.png';

export default function Header() {
    return (
        <header>
            <nav className='nav'>
                <img src={reactLogo} alt='React Logo' className='nav-img' />
                <h3 className='nav-title'>ReactFacts</h3>
                <h4 className='nav-desc'>React Course - Project 1</h4>
            </nav>
        </header>
    )
}