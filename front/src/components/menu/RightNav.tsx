import React, { useEffect, useContext, useState } from 'react'

import * as S from './styles';

import Sobre from '../../pages/sobre/Sobre';
import Projetos from '../../pages/projetos/Projetos';

import HrefContext from '../../context/Href';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

type Props = {
  open: boolean;
}

function RightNav(props: Props) {
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
    <Router>
      <S.Ul open={props.open} href={href}>
        <li><Link to="/" onClick={() => handleSubmit('/')} className="LinkHome">Home</Link></li>
        <li><Link to="/projetos" onClick={() => handleSubmit('projetos')} className="LinkProjetos">Projetos</Link></li>
      </S.Ul>

      <Switch>
        <Route exact path="/">
          <Sobre />
        </Route>
        <Route exact path="/projetos" >
          <Projetos />
        </Route>
      </Switch>
    </Router>
  )
}

export default RightNav
