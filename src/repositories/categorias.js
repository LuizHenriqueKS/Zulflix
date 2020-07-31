import config from '../config';
import Util from './util';

const URL_CATEGORIAS = `${config.URL_BACKEND_TOP}/categorias`;

function getAll() {
  return Util.getResponseJSON(fetch(`${URL_CATEGORIAS}`));
}

function getAllWithVideos() {
  return Util.getResponseJSON(fetch(`${URL_CATEGORIAS}?_embed=videos`));
}

export default {
  getAll,
  getAllWithVideos,
};
