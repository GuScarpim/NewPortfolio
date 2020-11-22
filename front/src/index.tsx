import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './globalStyles';

import Sobre from './pages/sobre/Sobre';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Sobre />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
