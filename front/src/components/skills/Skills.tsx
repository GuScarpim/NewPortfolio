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

interface Icons {
  icons: String
}

export default function Skills() {
  const [item, setItem] = useState([
    // ReactIcon, Typescript, Html, Css, Javascript, Bootstrap,
    // Materialize, Material, Sass, Node, Angular, Vue,
    // Java, Sql, Mongo, Mysql, Redux, Git,
    // GitHub, Npm, Yarn, Ubuntu, Linux, Windows, Azure,
    // Cmd, Trello, Code, Responsive, GitHub
  ])

  const [skills, setSkills] = useState<Icons[]>([
    { icons: ReactIcon }, { icons: Typescript }, { icons: Html }, { icons: Css }, { icons: Javascript }, { icons: Bootstrap },
    { icons: Materialize }, { icons: Material }, { icons: Sass }, { icons: Node }, { icons: Angular }, { icons: Vue },
    { icons: Java }, { icons: Sql }, { icons: Mongo }, { icons: Mysql }, { icons: Redux }, { icons: Git },
    { icons: GitHub }, { icons: Npm }, { icons: Yarn }, { icons: Ubuntu }, { icons: Linux }, { icons: Windows }, { icons: Azure },
    { icons: Cmd }, { icons: Trello }, { icons: Code }, { icons: Responsive }, { icons: GitHub },
  ])

  return (
    <S.ContentIcon>
      {skills.map((index, item2) => (
        <S.CardIcon key={`${index}`}>
          <img src={item2.icons} alt="Icones" />
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg> */}
        </S.CardIcon>
      ))}
    </S.ContentIcon>
  )
}