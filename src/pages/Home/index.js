import React, { useEffect, useState } from 'react';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

const videosIniciais = require('./data.json');

function Home() {
  const [dadosIniciais, setDadosInicias] = useState([]);

  useEffect(() => {
    setDadosInicias(videosIniciais);
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosInicias(categoriasComVideos);
        console.log(JSON.stringify(categoriasComVideos));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <PageDefault paddingAll={0} menuTransparente={dadosIniciais.length > 0}>

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.length > 0 && (
        <>
          <BannerMain
            videoTitle={dadosIniciais[0]?.videos[0]?.titulo}
            url={dadosIniciais[0]?.videos[0]?.url}
            videoDescription="Algumas das melhores músicas de animes."
          />

          <Carousel
            ignoreFirstVideo
            category={dadosIniciais[0]}
          />
        </>
      )}

      {dadosIniciais.slice(1).map((categoria) => (
        <>
          <Carousel
            ignoreFirstVideo
            category={categoria}
          />
        </>
      ))}

    </PageDefault>
  );
}

export default Home;
