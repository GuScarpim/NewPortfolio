import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Zilla Slab', serif;
    color: #FFF;
    padding-top: 400px;
`

export const Perfil = styled.div`
  background: #31363F;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  margin-top: -100px;
  padding: 20px;

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
`

export const Icons = styled.div`
  width: 100%;
/* 4A4D51 */
`


export const Description = styled.div`
    background: #31363F;
    max-width: 800px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    padding: 20px;
    margin-left: 30px;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
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
