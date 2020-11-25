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
          3 - Hello World
          3 - Hello World
          3 - Hello World
          3 - Hello World
          3 - Hello World
          3 - Hello World
          3 - Hello World
          3 - Hello World
          3 - Hello World

        </S.Description>

      </S.Content>
    </S.Container>
  )
}