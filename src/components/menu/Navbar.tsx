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
        <div className="custom-shape">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className="shape-fill"></path>
          </svg>
        </div>
      </S.Nav>
      <Burger />
      {props.children}
    </>
  )
}