import React, { useEffect, useContext, useState } from 'react'

import * as S from './styles';

import Footer from '../../components/footer/footer';
import HrefContext from '../../context/Href';

interface Iproject {
  title: string,
  description: string,
  linkGithub: string,
  linkProjeto?: string,
  linkGif: string,
  reverse: boolean
}

function Projetos() {
  const [href, setHref] = useState<string>("");
  const [projects, setProjects] = useState<Iproject[]>([
    {
      title: 'Clone do WhatsApp',
      description: 'Esse projeto foi desenvolvido para demonstrar como fazer um clone do WhatsApp utilizando as linguagens <b>ReactJs</b>, <b>Typescript</b> com <b>Styled Components</b>.',
      linkGithub: 'https://github.com/GuScarpim/Clone_WhatsApp',
      linkProjeto: 'https://github.com/GuScarpim/Clone_WhatsApp',
      linkGif: 'https://raw.githubusercontent.com/GuScarpim/Clone_WhatsApp/main/front/src/Assets/gif.gif',
      reverse: false,
    },
    {
      title: 'Buscar Cep React',
      description: '',
      linkGithub: 'https://github.com/GuScarpim/BuscarCep-React',
      linkProjeto: 'https://guscarpim.github.io/BuscarCep-React/index',
      linkGif: 'https://user-images.githubusercontent.com/47616551/73510308-742b5480-43c0-11ea-995e-cfed2c876874.gif',
      reverse: true,
    },
    {
      title: 'Filmes KRS',
      description: '',
      linkGithub: 'https://github.com/GuScarpim/Filmes_KRS',
      linkProjeto: 'https://github.com/GuScarpim/Filmes_KRS',
      linkGif: 'https://raw.githubusercontent.com/GuScarpim/Filmes_KRS/master/web/src/assets/locadora.gif',
      reverse: false,
    },
    {
      title: 'Private Route React',
      description: '',
      linkGithub: 'https://github.com/GuScarpim/React-Login-PrivateRoute',
      linkProjeto: 'https://github.com/GuScarpim/React-Login-PrivateRoute',
      linkGif: 'https://raw.githubusercontent.com/GuScarpim/React-Login-PrivateRoute/master/myapp/src/img/ReactLoginGuScarpim.gif',
      reverse: true,
    },
    {
      title: 'Vue Search Repos',
      description: '',
      linkGithub: 'https://github.com/GuScarpim/Vue_Search_Repos',
      linkProjeto: 'https://guscarpim.github.io/Vue_Search_Repos/',
      linkGif: 'https://raw.githubusercontent.com/GuScarpim/Vue_Search_Repos/master/src/assets/vue.gif',
      reverse: false,
    },
    {
      title: '.Net Core API - AD Group',
      description: 'API em DotNet Core com autenticação por grupos do AD do windows.',
      linkGithub: 'https://github.com/GuScarpim/.NetCoreAPI_AD_Group',
      linkProjeto: 'https://github.com/GuScarpim/.NetCoreAPI_AD_Group',
      linkGif: 'https://guscarpim.github.io/Portfolio/static/media/api.b92871a7.gif',
      reverse: true,
    },
    {
      title: 'Buscar Cep React Native',
      description: '',
      linkGithub: 'https://github.com/GuScarpim/Consulta-CEP-React-Native',
      linkProjeto: 'https://github.com/GuScarpim/Consulta-CEP-React-Native',
      linkGif: 'https://raw.githubusercontent.com/GuScarpim/Consulta-CEP-React-Native/master/src/img/ReactNativeCep_GustavoScarpim.gif',
      reverse: false,
    },
    {
      title: '',
      description: '',
      linkGithub: 'https://github.com/GuScarpim/Next_Google_Route_Private',
      linkProjeto: 'https://github.com/GuScarpim/Next_Google_Route_Private',
      linkGif: 'https://raw.githubusercontent.com/GuScarpim/Next_Google_Route_Private/master/public/images/next_google.gif',
      reverse: true,
    },
  ]);

  useEffect(() => {
    var href = window.location.pathname;
    handleSubmit(href)
  }, [])

  //usando o useContext para capturar as propriedades do UserContext
  const { setState: setGlobalState } = useContext(HrefContext);

  //função que ira submeter a alteração do estado global da aplicação
  function handleSubmit(endpoint?: any) {
    setHref(endpoint)
    setGlobalState({ href });
  }

  return (
    <>
      <S.Container>
        {projects.map((item, index) => (
          <>
            {item.reverse === false ?
              <S.Card>
                <div className="div1">
                  <h1>{item.title}</h1>
                  <span dangerouslySetInnerHTML={{ __html: item.description }} >
                  </span>
                  <a href={item.linkGithub} target="_blank">
                    Ver código
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z" />
                    </svg>
                  </a>
                </div>
                <a href={item.linkProjeto} target="_blank" className="div2">
                  <img src={item.linkGif} alt="Projeto" />
                </a>
              </S.Card> :

              <S.CardReverse>
                <a href={item.linkProjeto} target="_blank" className="div2">
                  <img src={item.linkGif} alt="Projeto" />
                </a>
                <div className="div3">
                  <h1>{item.title}</h1>
                  <span dangerouslySetInnerHTML={{ __html: item.description }} >
                  </span>
                  <a href={item.linkGithub} target="_blank">
                    Ver código
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z" />
                    </svg>
                  </a>
                </div>
              </S.CardReverse>
            }
          </>
        ))}
      </S.Container>
      <Footer />
    </>
  )
}

export default Projetos
