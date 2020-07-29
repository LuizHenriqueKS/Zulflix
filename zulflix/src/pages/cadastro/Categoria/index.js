import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000'
  };
  const [values, setValues] = useState(valoresIniciais);

  const setValue = (chave, valor) => setValues({ ...values, [chave]: valor });
  const handleChange = (event) => setValue(event.target.getAttribute('name'), event.target.value);

  document.getElementById("root").setAttribute("component", "CadastroCategoria");
  return (
    <PageDefault>
      <h1>Cadastro de categoria: {values.nome}</h1>

      <form onSubmit={(event) => {
        setCategorias([...categorias, values]);
        setValues({ ...valoresIniciais });
        event.preventDefault();
      }}>

        <div>

          <FormField
            name="nome"
            label="Nome da categoria:"
            type="text"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            name="descricao"
            label="Descrição:"
            type="textarea"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField
            name="cor"
            label="Cor:"
            type="color"
            value={values.cor}
            onChange={handleChange}
          />

        </div>

        <button className="mr-3">
          Cadastrar
        </button>

        <Link to="/">
          Ir para home
        </Link>

      </form>


      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={indice}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

    </PageDefault >
  )
}

export default CadastroCategoria;