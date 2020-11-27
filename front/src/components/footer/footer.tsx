import React from 'react';
import * as S from './styles';

import ReactIcon from '../../assets/react.svg';
import Typescript from '../../assets/typescript.svg';

export default function Icons() {
  return (
    <S.Footer>
      <span>
        Desenvolvido por <b> Gustavo Scarpim </b> utilizando <img src={ReactIcon} alt="Icone React" />
        com <img alt="Typescript" src={Typescript} />
        </span>
    </S.Footer>
  )
}