import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';
import './Menu.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Zulflix" />
      </Link>

      <div className="flex-grow-1" />

      <Button as={Link} className="ButtonLink" to="/cadastro/musica">
        Novo música
      </Button>
    </nav>
  );
}

export default Menu;
