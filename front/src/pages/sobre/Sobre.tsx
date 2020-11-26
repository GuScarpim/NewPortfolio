import React from 'react';
import * as S from './styles';

import ReactIcon from '../../assets/react.svg';

import Icons from '../../components/icons/Icons';
import Skills from '../../components/skills/Skills';

export default function Sobre() {
  return (
    <S.Container>
      <S.Content>

        <S.Perfil>
          <img alt="Gustavo Scarpim"
            src="https://avatars1.githubusercontent.com/u/47616551?s=460&u=f9f81df034252d349d5c631a85cd57ea603beefa&v=4" />

          <label>Gustavo Scarpim</label>

          <S.Icons>
            <Icons />
          </S.Icons>

          <S.ContentMe>
            <span>Desenvolvedor <b>Front End</b></span>
            <img src={ReactIcon} alt="Icone React" />
          </S.ContentMe>

          <S.Skills>
            <label>Minhas Skills</label>
            <hr />
            <Skills />
          </S.Skills>

        </S.Perfil>

        <S.Description>
          <h2><img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="28px" /> Olá,
            meu nome é <b>Gustavo Scarpim</b> !
          </h2>

          <p>
            Tenho 21 anos, moro na cidade de São Paulo - Capital, cursando o 6º semestre de <b>Ciência da Computação</b> na
            Universidade Cruzeiro do Sul.

          <p>
            Apaixonado por tecnologia, arte, xadrez e música, obtive uma boa afinidade com a área da programação.
            Sou <b>desenvolvedor FrontEnd</b> com muito orgulho, enxadrista e músico.
          </p>

          </p>

        </S.Description>

      </S.Content>
    </S.Container>
  )
}