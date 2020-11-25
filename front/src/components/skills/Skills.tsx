import React, { useState } from 'react';
import * as S from './styles';

import Angular from '../../assets/angular.svg';
import Azure from '../../assets/azure.svg';
import Brave from '../../assets/brave.svg';
import Bootstrap from '../../assets/bootstrap.svg';
import Chrome from '../../assets/chrome.svg';
import Cmd from '../../assets/cmd.svg';
import Code from '../../assets/code.svg';
import Css from '../../assets/css.svg';
import Git from '../../assets/git.svg';
import GitHub from '../../assets/github.svg';
import Html from '../../assets/html.svg';
import Java from '../../assets/java.svg';
import Javascript from '../../assets/javascript.svg';
import Linux from '../../assets/linux.svg';
import Material from '../../assets/material.svg';
import Materialize from '../../assets/materialize.svg';
import Mongo from '../../assets/mongo.svg';
import Mysql from '../../assets/mysql.svg';
import Node from '../../assets/node.svg';
import Npm from '../../assets/npm.svg';
import ReactIcon from '../../assets/react.svg';
import Redux from '../../assets/redux.svg';
import Responsive from '../../assets/responsive.svg';
import Sass from '../../assets/sass.svg';
import Sql from '../../assets/sql.svg';
import Trello from '../../assets/trello.svg';
import Typescript from '../../assets/typescript.svg';
import Ubuntu from '../../assets/ubuntu.svg';
import Vue from '../../assets/vue.svg';
import Windows from '../../assets/windows.svg';
import Yarn from '../../assets/yarn.svg';

interface Ifigure {
  [icons: string]: any
}

export default function Skills() {

  const [skills, setSkills] = useState<Ifigure[]>([
    { icons: ReactIcon }, { icons: Typescript }, { icons: Html }, { icons: Css }, { icons: Javascript }, { icons: Bootstrap },
    { icons: Materialize }, { icons: Material }, { icons: Sass }, { icons: Node }, { icons: Angular }, { icons: Vue },
    { icons: Java }, { icons: Sql }, { icons: Mongo }, { icons: Mysql }, { icons: Redux }, { icons: Git },
    { icons: GitHub }, { icons: Npm }, { icons: Yarn }, { icons: Ubuntu }, { icons: Linux }, { icons: Windows }, { icons: Azure },
    { icons: Cmd }, { icons: Trello }, { icons: Code }, { icons: Responsive }, { icons: Brave },
  ])

  return (
    <S.ContentIcon>
      {skills.map((item, index) => (
        <S.CardIcon key={index}>
          {/* <div className="tooltip"> */}
            <img src={item.icons} alt="Icones" />
            {/* <span className="tooltiptext">Tooltip text</span> */}
          {/* </div> */}
        </S.CardIcon>
      ))}
    </S.ContentIcon>
  )
}