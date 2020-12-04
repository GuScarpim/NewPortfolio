import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Zilla Slab';
    color: #FFF;
    padding-top: 140px;
    animation: show .5s cubic-bezier(.1,.82,.25,1);
    justify-content: center;
    position: relative;
    width: 95vw;

    @keyframes show {
      0% {
        transform: scale(1.4);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }

    @media (max-width: 800px) {
      justify-content: center;
      position: relative;
      width: 95vw;
      padding: 50px 15px 0px 15px;
      overflow-x: auto;
      overflow-y: hidden;
    }

    @media (max-width: 650px) {
      padding: 50px 15px 0px 15px;
    }

    @media (max-width: 600px) {
      padding: 50px 5px 0px 15px;
    }
`

export const ContentPerfil = styled.div`
  @media (max-width: 800px) {
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }
`


export const Perfil = styled.div`
  background: #31363F;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  margin-top: -100px;
  padding: 20px;
  max-height: 1200px;

  img {
    width: 260px;
    height: 260px;
    border-radius: 20px;
  }

  label {
    width: 100%;
    text-align: center;
    font-size: 26px;
    margin-top: 10px;
  }

  @media (max-width: 800px) {
    margin-top: 30px;
    width: 260px;
  }
`

export const Icons = styled.div`
  width: 100%;
/* 4A4D51 */
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    padding: 0px;
  }
`

export const ContentMe = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  margin-top: 30px;
  color: #64d2f2;

  span {
    font-size: 18px;
  }

  img {
    width: 50px;
    height: 50px;
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
        animation: App-logo-spin infinite 20s linear;
    }

    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }

`

export const Skills = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 100px;
`

export const Description = styled.div`
    background: #31363F;
    max-width: 800px;
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    padding: 20px;
    margin-left: 30px;

    h2 {
      font-size: 2rem;
      b {
        color: #64D2F2;
      }

      &:nth-child(3) {
        margin-top: 5px;
      }

      &:nth-child(5) {
        margin-top: 5px;
      }
    }

    p {
      font-size: 18px;
      line-height: 25px;
      font-family: 'Helvetica';
      font-weight: 100 !important;

      b {
        color: #64D2F2;
      }
    }

    @media (max-width: 800px) {
      margin-left: 0px;
      text-align: center;
      width: 94%;
    }

    @media (max-width: 650px) {
      max-width: 89vw !important;
      margin-left: 0px;
    }

    @media (max-width: 550px) {
      max-width: 85vw;
    }

    @media (max-width: 360px) {
      max-width: 82vw;
    }
`
