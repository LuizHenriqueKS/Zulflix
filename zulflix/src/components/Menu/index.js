import React from 'react';
import Logo from '../../assets/img/Logo.png'
import ButtonLink from '../ButtonLink';
import './Menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Zulflix" />
            </a>

            <div className="flex-grow-1" />

            <ButtonLink className="ButtonLink" href="/">
                Novo vídeo
            </ButtonLink>
        </nav>
    );
}

export default Menu;