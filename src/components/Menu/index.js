import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button';
import './Menu.css';

function Menu({ transparente }) {
  console.log('menUTransparente', transparente);
  return (
    <nav className="Menu" transparente={transparente ? 'true' : 'false'}>
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

Menu.defaultProps = {
  transparente: false,
};

Menu.propTypes = {
  transparente: PropTypes.bool,
};

export default Menu;
