import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '#000',
  };

  const { values, handleChange, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriasRepository.getAll()
      .then(async (respostaConvertidaEmObj) => setCategorias([...respostaConvertidaEmObj]));
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de categoria:
        {' '}
        {values.titulo}
      </h1>

      <form onSubmit={(event) => {
        setCategorias([...categorias, values]);
        clearForm();
        event.preventDefault();
      }}
      >

        <div>

          <FormField
            name="titulo"
            label="Nome da categoria"
            type="text"
            value={values.titulo}
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

        <button className="mr-3" type="submit">
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
          <li key={`${categoria.titulo}_${categoria.cor}`}>
            {categoria.titulo}
          </li>
        )))}
      </ul>

    </PageDefault>
  );
}

export default CadastroCategoria;
