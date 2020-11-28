import React from 'react';

import Burger from './Burger';

import * as S from './styles';

type Props = {
  children?: any;
}

export default function Navbar(props: Props) {
  return (
    <>
      <S.Nav>
        <div className="logo">
          <div className="flex">
            <span>GUSTAVO SCARPIM</span>
            {/* <span style={{ marginTop: "-5px", fontSize: "20px" }}>SCARPIM</span> */}
          </div>
        </div>
      </S.Nav>
      <Burger />
      {props.children}
    </>
  )
}