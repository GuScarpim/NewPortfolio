import React, { useState } from 'react'

import * as S from './styles';
import Sobre from '../../pages/sobre/Sobre';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

type Props = {
  open: boolean;
}

function RightNav(props: Props) {
  return (
    <Router>
      <S.Ul open={props.open}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/projetos">Projetos</Link></li>
      </S.Ul>

      <Switch>
        <Route exact path="/" >
            <Sobre />
        </Route>
      </Switch>
    </Router>
  )
}

export default RightNav