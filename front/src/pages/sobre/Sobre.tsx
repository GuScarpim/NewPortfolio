
import React from 'react';
import * as S from './styles';

import { Container } from '@material-ui/core';

export default function Sobre() {
  return (
    <S.Container>
      <S.Content>
        <div className="parent">
          <div className="div1">
            <S.ContentPerfil>
              <img alt="Gustavo Scarpim"
                src="https://avatars1.githubusercontent.com/u/47616551?s=460&u=f9f81df034252d349d5c631a85cd57ea603beefa&v=4" />
            </S.ContentPerfil>
          </div>
          <div className="div2">3 - Hello World</div>
        </div>
      </S.Content>
    </S.Container>
  )
}