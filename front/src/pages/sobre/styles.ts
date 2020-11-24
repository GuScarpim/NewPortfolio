import styled from 'styled-components';

export const Container = styled.div`
    font-family: 'Zilla Slab', serif;
    color: #FFF;

  .parent {
    display: grid;
    grid-template-columns: 0.6fr 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .div1 { 
    height: 100vh;
    grid-area: 1 / 1 / 2 / 2;
  }

  .div2 { 
    height: 100vh;
    width: 100%;
    background: orange;
    max-width: 300px;
    grid-area: 1 / 2 / 2 / 3;
  }

`

export const ContentPerfil = styled.div`
  background: #31363F;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 20px;

  img {
    width: 260px;
    height: 260px;
    border-radius: 20px;
  }
`

export const Content = styled.div`
  background: #000;
  display: flex;
  justify-content: center;
  width: 70vw;
  
`