import './index.css';
import './util.css';

import React from 'react';
import ReactDOM from 'react-dom';
import ListenScroll from './scrollListener.js';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CadastroMusica from './pages/cadastro/Musica';
import CadastroCategoria from './pages/cadastro/Categoria';
import Page404 from './pages/Page404';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/musica" component={CadastroMusica} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

ListenScroll();