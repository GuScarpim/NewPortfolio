import React, { useEffect, useContext, useState } from 'react'

import * as S from './styles';

import Footer from '../../components/footer/footer';
import HrefContext from '../../context/Href';

function Projetos() {
  const [href, setHref] = useState<string>("");

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

        <S.Card>
          <div className="div1">
            <h1>Clone do WhatsApp</h1>
            <span>
              Esse projeto foi desenvolvido para demonstrar como fazer um clone do WhatsApp
                utilizando as linguagens <b>ReactJs</b>, <b>Typescript</b> com <b>Styled Components</b>.
              </span>
            <a href="https://github.com/GuScarpim/Clone_WhatsApp" target="_blank">
              Ver código
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z" />
              </svg>
            </a>
          </div>
          <a href="https://github.com/GuScarpim/Clone_WhatsApp" target="_blank" className="div2">
            <img src="https://raw.githubusercontent.com/GuScarpim/Clone_WhatsApp/main/front/src/Assets/gif.gif" alt="Projeto" />
          </a>
        </S.Card>

        <S.Card>
          <div className="div1">
            <h1>Clone do WhatsApp</h1>
            <span>
              Esse projeto foi desenvolvido para demonstrar como fazer um clone do WhatsApp
                utilizando as linguagens <b>ReactJs</b>, <b>Typescript</b> com <b>Styled Components</b>.
              </span>
            <a href="https://github.com/GuScarpim/Clone_WhatsApp" target="_blank">
              Ver código
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 12l-4.5 4.5 1.527 1.5 5.973-6-5.973-6-1.527 1.5 4.5 4.5z" />
              </svg>
            </a>
          </div>
          <a href="https://github.com/GuScarpim/Clone_WhatsApp" target="_blank" className="div2">
            <img src="https://raw.githubusercontent.com/GuScarpim/Clone_WhatsApp/main/front/src/Assets/gif.gif" alt="Projeto" />
          </a>
        </S.Card>

      </S.Container>
      <Footer />
    </>
  )
}

export default Projetos
