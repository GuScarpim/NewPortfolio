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
