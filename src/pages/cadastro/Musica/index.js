import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import musicaRepository from '../../../repositories/musicas';
import categoriaRepository from '../../../repositories/categorias';

function CadastroMusica() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map((c) => c.titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriaRepository.getAll()
      .then((cats) => setCategorias(cats));
  }, []);

  return (
    <PageDefault>

      <h1>Cadastro de música</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const { categoriaId } = categorias.find((c) => c.titulo === values.categoria);

        musicaRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId,
        }).then(() => history.push('/'));
      }}
      >

        <FormField
          name="titulo"
          label="Título da música"
          type="text"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          name="url"
          label="URL"
          type="text"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          name="categoria"
          label="Categoria"
          type="text"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <button className="mr-3" type="submit">
          Cadastrar
        </button>

        <Link to="/" className="mr-3">
          Ir para home
        </Link>

        <Link to="/cadastro/categoria">
          Cadastrar de categoria
        </Link>

      </form>

    </PageDefault>
  );
}

export default CadastroMusica;
