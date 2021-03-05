import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './globalStyles';

import NavBar from './components/menu/Navbar';
import Sobre from './pages/sobre/Sobre';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <NavBar />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
