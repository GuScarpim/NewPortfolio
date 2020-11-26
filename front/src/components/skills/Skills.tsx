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
  [icons: string]: any,
  name: string,
}

export default function Skills() {

  const [skills, setSkills] = useState<Ifigure[]>([
    { icons: ReactIcon, name: 'ReactJs' }, { icons: Typescript, name: 'TypeScript' }, { icons: Html, name: 'Html' }, { icons: Css, name: 'Css' },
    { icons: Javascript, name: 'Javascript' }, { icons: Bootstrap, name: 'Bootstrap' }, { icons: Materialize, name: 'Materialize' },
    { icons: Material, name: 'Material Ui' }, { icons: Sass, name: 'Sass' }, { icons: Node, name: 'NodeJs' }, { icons: Angular, name: 'AngularJs' },
    { icons: Vue, name: 'VueJs' }, { icons: Java, name: 'Java' }, { icons: Sql, name: 'SQL' }, { icons: Mongo, name: 'Mongo DB' },
    { icons: Mysql, name: 'Mysql' }, { icons: Redux, name: 'Redux' }, { icons: Git, name: 'Git' }, { icons: GitHub, name: 'GitHub' }, { icons: Npm, name: 'Npm' },
    { icons: Yarn, name: 'Yarn' }, { icons: Ubuntu, name: 'Ubuntu' }, { icons: Linux, name: 'Linux' }, { icons: Windows, name: 'Windows' },
    { icons: Azure, name: 'Azure' }, { icons: Cmd, name: 'Cmd' }, { icons: Trello, name: 'Trello' }, { icons: Code, name: 'VS Code' },
    { icons: Responsive, name: 'Responsive' }, { icons: Brave, name: 'Brave' },
  ])

  return (
    <S.ContentIcon>
      {skills.map((item, index) => (
        <S.CardIcon key={index}>
          <div className="tooltip">
            <img src={item.icons} alt="Icones" />
            <span className="tooltiptext">{item.name}</span>
          </div>
        </S.CardIcon>
      ))}
    </S.ContentIcon>
  )
}