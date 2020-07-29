import React from 'react';
import PageNotFound from "../../assets/img/PageNotFound.png"
import "./index.css";

function Home() {
  document.getElementById("root").setAttribute("component", "Page404");
  return (
    <div className="Page404">
      <img className="PageNotFoundImg" src={PageNotFound} alt="Zulflix" />
      <div className="PageNotFoundText">Página não encontrada</div>
    </div>
  );
}

export default Home;
