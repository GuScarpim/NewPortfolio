import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  input, button, textarea {
    font-family: 'Zilla Slab';
  }

  ::-webkit-scrollbar {
    width: 6px;
    background-color: #CCCCCC;
    -webkit-border-radius: 0px;
  }
  ::-webkit-scrollbar:hover {
    background-color: rgba(0, 0, 0, 0.09);
  }
  ::-webkit-scrollbar-thumb:vertical {
    -webkit-border-radius: 0px;
    background: #CCCCCC;
  }
  ::-webkit-scrollbar-thumb:vertical:active {
    -webkit-border-radius: 0px;
    background: #CCCCCC;
  }
  ::-webkit-scrollbar {
    width: 7px;
    height: 8px;
    background-color: #CCCCCC
  }
  ::-webkit-scrollbar:hover {
    background-color: #CCCCCC;
  }
  ::-webkit-scrollbar-thumb:vertical {
    -webkit-border-radius: 0px;
    background: #CCCCCC;
  }

  body {
    padding: 0px;
    margin: 0px;
    background: #24292E;
    width: 95vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default GlobalStyle;