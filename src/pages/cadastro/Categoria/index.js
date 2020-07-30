import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000',
  };
  const [values, setValues] = useState(valoresIniciais);

  const setValue = (chave, valor) => setValues({ ...values, [chave]: valor });

  const handleChange = (event) => setValue(event.target.getAttribute('name'), event.target.value);

  document.getElementById('root').setAttribute('component', 'CadastroCategoria');

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost') ? 'http://localhost:8080/categorias' : 'https://zulflix.herokuapp.com/categorias';
    fetch(URL_TOP)
      .then(async (respostaDoServidor) => respostaDoServidor.json())
      .then(async (respostaConvertidaEmObj) => setCategorias([...respostaConvertidaEmObj]));
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de categoria:
        {' '}
        {values.nome}
      </h1>

      <form onSubmit={(event) => {
        setCategorias([...categorias, values]);
        setValues({ ...valoresIniciais });
        event.preventDefault();
      }}
      >

        <div>

          <FormField
            name="nome"
            label="Nome da categoria"
            type="text"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField
            name="descricao"
            label="Descrição"
            type="textarea"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField
            name="cor"
            label="Cor"
            type="color"
            value={values.cor}
            onChange={handleChange}
          />

        </div>

        <button className="mr-3" type="button">
          Cadastrar
        </button>

        <Link to="/">
          Ir para home
        </Link>

      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map(((categoria) => (
          <li key={`${categoria.nome}_${categoria.cor}`}>
            {categoria.nome}
          </li>
        )))}
      </ul>

    </PageDefault>
  );
}

export default CadastroCategoria;
