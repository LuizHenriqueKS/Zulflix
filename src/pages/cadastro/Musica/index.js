import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroMusica() {
  document.getElementById('root').setAttribute('component', 'CadastroMusica');
  return (
    <PageDefault>
      <h1>Cadastro de música</h1>

      <Link to="/cadastro/categoria">
        Cadastrar de categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroMusica;
