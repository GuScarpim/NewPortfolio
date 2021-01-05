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
  reverse: boolean,
  width: any,
}

function Projetos() {
  const [href, setHref] = useState<string>("");
  const [projects, setProjects] = useState<Iproject[]>([
    {
      title: 'Sempre IT - Front',
      description: 'Projeto desenvolvido para realizar um teste da empresa <b>Sempre IT</b>, o desafio era criar um CRUD com autenticação completo, foi utilizado <b>ReactJS</b>, <b>Typescript</b>, <b>Styled Components</b> para desenvolver o <b>front</b>, e <b>NodeJS</b> com <b>Mysql</b> para fazer a <b>API</b>.',
      linkGithub: 'https://github.com/GuScarpim/IT-Forever',
      linkProjeto: 'https://github.com/GuScarpim/IT-Forever',
      linkGif: 'https://github.com/GuScarpim/IT-Forever/blob/main/src/Assets/IT_forever.gif?raw=true',
      width: '',
      reverse: false,
    },
    {
      title: 'Sempre IT - Back',
      description: 'Backend do projeto <b>Sempre IT</b>. Nesse projeto foi desenvolvido uma <b>API</b> para integrar com o meu front. Desenvolvi um <b>CRUD</b> com validação e autorização utilizando <b>JWT</b>, <b>NodeJS</b>, <b>Javascript</b> e persistindo os dados no banco <b>Mysql</b>.',
      linkGithub: 'https://github.com/GuScarpim/IT-Forever-Back',
      linkProjeto: 'https://github.com/GuScarpim/IT-Forever-Back',
      linkGif: 'https://github.com/GuScarpim/IT-Forever/raw/main/src/Assets/IT_foreverMobile.gif',
      width: '250',
      reverse: true,
    },
    {
      title: 'Meu primeiro Portfólio',
      description: 'Esse foi o meu primeiro portfólio desenvolvido para mostrar o meu trabalho e falar um pouco sobre mim. O portfólio foi desenvolvido utilizando as linguagens <b>ReactJS</b> com <b>Styled Components</b>.',
      linkGithub: 'https://github.com/GuScarpim/Portfolio',
      linkProjeto: 'https://guscarpim.github.io/Portfolio/',
      linkGif: 'https://raw.githubusercontent.com/GuScarpim/Portfolio/master/src/assets/portfolio.gif',
      width: '',
      reverse: false,
    },
    {
      title: 'Clone do WhatsApp',
      description: 'Esse projeto foi desenvolvido para demonstrar como fazer um clone do WhatsApp utilizando as linguagens <b>ReactJs</b>, <b>Typescript</b> com <b>Styled Components</b>.',
      linkGithub: 'https://github.com/GuScarpim/Clone_WhatsApp',
      linkProjeto: 'https://github.com/GuScarpim/Clone_WhatsApp',
      linkGif: 'https://raw.githubusercontent.com/GuScarpim/Clone_WhatsApp/main/front/src/Assets/gif.gif',
      width: '',
      reverse: true,
    },
    {
      title: 'Buscar Cep React',
      description: 'Buscar Cep foi uma idéia que eu tive quando comecei a programar em <b>React</b>, nele foi feito <b>consumo de API</b>, e populando dados dentro do <b>select</b> e <b>tabela</b>. Fiz esse projeto porque, percebi que muita gente que está começando a programar em <b>React</b> tem dificuldades com alguma dessas coisas, e deixei esse projeto <b>open source</b> para poder ajudar outros programadores.',
      linkGithub: 'https://github.com/GuScarpim/BuscarCep-React',
      linkProjeto: 'https://guscarpim.github.io/BuscarCep-React/index',
      linkGif: 'https://user-images.githubusercontent.com/47616551/73510308-742b5480-43c0-11ea-995e-cfed2c876874.gif',
      width: '',
      reverse: false,
    },
    {
      title: 'Filmes KRS',
      description: 'Esse foi um desafio de uma empresa chamada <b>KRS</b>, o desafio era criar um sistema de locadora onde era possível, cadastrar, editar, excluir e visualizar filmes, além de desenvolver o <b>Front</b> com <b>ReactJs</b> eu também desenvolvi uma <b>API</b> utilizando <b>NodeJS</b> com <b>MongoDB</b> para fazer as funcionalidades do Crud.',
      linkGithub: 'https://github.com/GuScarpim/Filmes_KRS',
      linkProjeto: 'https://github.com/GuScarpim/Filmes_KRS',
      linkGif: 'https://raw.githubusercontent.com/GuScarpim/Filmes_KRS/master/web/src/assets/locadora.gif',
      width: '',
      reverse: true,
    },
    {
      title: 'Private Route React',
      description: 'Private Route é um projeto desenvolvido por mim desde o <b>Backend</b> utilizando <b>NodeJs</b> com <b>MongoDB</b> até o <b>Front</b> utilizando <b>ReactJS</b>',
      linkGithub: 'https://github.com/GuScarpim/React-Login-PrivateRoute',
      linkProjeto: 'https://github.com/GuScarpim/React-Login-PrivateRoute',
      linkGif: 'https://raw.githubusercontent.com/GuScarpim/React-Login-PrivateRoute/master/myapp/src/img/ReactLoginGuScarpim.gif',
      width: '',
      reverse: false,
    },
    {
      title: 'Vue Search Repos',
      description: 'Esse projeto foi desenvolvido em <b>VueJs</b> consumindo uma <b>API</b> do <b>GitHub</b>, esse projeto é para mostrar como fazer uma requisição para pesquisar usuarios e os seus repositórios do <b>GitHub</b> utilizando VueJS.',
      linkGithub: 'https://github.com/GuScarpim/Vue_Search_Repos',
      linkProjeto: 'https://guscarpim.github.io/Vue_Search_Repos/',
      linkGif: 'https://raw.githubusercontent.com/GuScarpim/Vue_Search_Repos/master/src/assets/vue.gif',
      width: '',
      reverse: true,
    },
    {
      title: '.Net Core API - AD Group',
      description: 'API em DotNet Core demonstrando uma maneira de fazer autenticação por grupos do AD do windows.',
      linkGithub: 'https://github.com/GuScarpim/.NetCoreAPI_AD_Group',
      linkProjeto: 'https://github.com/GuScarpim/.NetCoreAPI_AD_Group',
      linkGif: 'https://guscarpim.github.io/Portfolio/static/media/api.b92871a7.gif',
      width: '',
      reverse: false,
    },
    {
      title: 'Buscar Cep React Native',
      description: 'Consumindo <b>API</b> de CEP em <b>React Native</b>. Esse projeto foi desenvolvido com <b>EXPO</b> e <b>React Native</b>.',
      linkGithub: 'https://github.com/GuScarpim/Consulta-CEP-React-Native',
      linkProjeto: 'https://github.com/GuScarpim/Consulta-CEP-React-Native',
      linkGif: 'https://raw.githubusercontent.com/GuScarpim/Consulta-CEP-React-Native/master/src/img/ReactNativeCep_GustavoScarpim.gif',
      width: '250',
      reverse: true,
    },
    {
      title: 'Next Google',
      description: 'O intuito desse projeto é demonstrar como fazer uma tela de login utilizando a autenticação do <b>Google</b>, além de guardar o <b>Token</b> no <b>Local Storage</b> ele também não permite avançar para a próxima página sem estar logado. Projeto desenvolvido com <b>NextJs</b> e <b>ReactJs</b>.',
      linkGithub: 'https://github.com/GuScarpim/Next_Google_Route_Private',
      linkProjeto: 'https://github.com/GuScarpim/Next_Google_Route_Private',
      linkGif: 'https://raw.githubusercontent.com/GuScarpim/Next_Google_Route_Private/master/public/images/next_google.gif',
      width: '',
      reverse: false,
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
              <S.Card width={item.width}>
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

              <S.CardReverse width={item.width}>
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
