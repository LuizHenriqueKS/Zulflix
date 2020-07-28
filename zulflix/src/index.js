import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './util.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const refreshBodyScrollTop = () => {
  const scrollTop = document.scrollingElement.scrollTop;
  document.body.setAttribute("scroll-top", parseInt(scrollTop));
};

document.addEventListener('scroll', event => {
  refreshBodyScrollTop();
}, false)
refreshBodyScrollTop();
