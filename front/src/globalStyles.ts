import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  input, button, textarea {
    font-family: 'Zilla Slab';
  }

  ::-webkit-scrollbar {
    width: 6px;
    background-color: #2e2e2e;
    -webkit-border-radius: 0px;
  }
  ::-webkit-scrollbar:hover {
    background-color: rgba(0, 0, 0, 0.09);
  }
  ::-webkit-scrollbar-thumb:vertical {
    -webkit-border-radius: 0px;
    background: #2e2e2e;
  }
  ::-webkit-scrollbar-thumb:vertical:active {
    -webkit-border-radius: 0px;
    background: #2e2e2e;
  }
  ::-webkit-scrollbar {
    width: 7px;
    height: 8px;
    background-color: #CCC
  }
  ::-webkit-scrollbar:hover {
    background-color: #CCC;
  }
  ::-webkit-scrollbar-thumb:vertical {
    background: #2e2e2e;
  }

  body {
    padding: 0px;
    margin: 0px;
    background: #24292E;
  }
`

export default GlobalStyle;