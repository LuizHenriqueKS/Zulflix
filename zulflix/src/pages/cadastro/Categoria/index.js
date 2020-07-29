import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  document.getElementById("root").setAttribute("component", "CadastroCategoria");
  return (
    <PageDefault>
      <h1>Cadastro de categoria</h1>

      <form>

        <label>
          Nome da categoria:
          <input
            type="text"
            class="mt-1"
          />
        </label>

        <button className="mr-3">
          Cadastrar
        </button>

        <Link to="/">
          Ir para home
        </Link>

      </form>

    </PageDefault>
  )
}

export default CadastroCategoria;