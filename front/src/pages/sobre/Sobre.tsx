import React from 'react';
import * as S from './styles';

import ReactIcon from '../../assets/react.svg';
import Xadrez from '../../assets/xadrez.svg';
import Musico from '../../assets/trompete.svg';

import Footer from '../../components/footer/footer';
import Icons from '../../components/icons/Icons';
import Skills from '../../components/skills/Skills';

export default function Sobre() {
  return (
    <>
      <S.Container>
        <S.Content>
          <S.ContentPerfil>

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

          </S.ContentPerfil>
          <S.Description>
            <h2><img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="28px" alt="Gif olá" /> Olá,
            meu nome é <b>Gustavo Scarpim</b>!
          </h2>

            <p>
              Tenho 21 anos, moro na cidade de São Paulo - Capital, cursando o 6º semestre de <b>Ciência da Computação</b> na
            Universidade Cruzeiro do Sul.

            <p>
                Apaixonado por tecnologia, arte, xadrez e música, obtive uma boa afinidade com a área da programação.
              Sou <b>desenvolvedor FrontEnd</b> com muito orgulho, <img src={Xadrez} alt="Xadrez" width="20px" /> enxadrista
              , <img src={Musico} alt="Musico" width="20px" /> e músico.
            </p>
            </p>

            <h2>Histórico profissional</h2>

            <p>
              Iniciei na programação em 2016 com alguns cursos da internet, no ano de 2018 dei inicio na faculdade de <b>Ciência da
            computação</b>, aprendi muita coisa na faculdade e nos cursos que realizei por fora, logo, em 2019 consegui o
            meu primeiro estágio na área de <b>desenvolvimento</b> na empresa <b>ABBC</b> do ramo financeiro.

            <p>
                No estágio eu trabalhei com desenvolvimento <b>Front-End e Backend</b>, utilizando as liguanges ReactJs, NodeJs, Javascript, C#,
              .Net Core, SQL e Mongo DB. As minhas principais atividades dentro da empresa eram criar <b>sistemas web</b> para melhorias na parte
              interna de dentro da empresa.
            </p>

              <p>
                No fim do meu estágio em 2020, fui para uma agência publicitária chamada <b>Hyst</b> também do ramo financeiro, atuando como
              <b> Desenvolvedor Front-End Jr.</b>, as linguagens que eu utilizo na <b>Hyst</b> são ReactJs, VueJs, NextJs, Sass, Redux,
               e também acumulei diversas skills de <b>Front-End</b> e <b>UX Design</b>.
            </p>
            </p>

            <h2>Curiosidades e Hobbies</h2>

            <p>
              Uma das coisas que mais gosto de fazer no meu tempo livre é <b>estudar</b> coisas novas, sempre que aprendo algo eu crio um repositório no
            <b> GitHub</b> para fazer um projeto e assim colocar aquilo que estudei em prática.

            <p>
                Além de estudar eu curto uma "partidinha" de <b>Xadrez</b> e já participei de diversos torneios.
              Aprendi muito cedo a tocar um instrumento chamado <i><b>eufônio</b></i> e desde então, sempre que posso estou praticando e tocando ele.
            </p>

            </p>

          </S.Description>
        </S.Content>

      </S.Container>
      <Footer />
    </>
  )
}