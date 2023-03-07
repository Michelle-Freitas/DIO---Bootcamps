import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import GlobalStyles from './global'; //estilo pasra toda aplicação


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyles /> 
    <App />
  </React.StrictMode>
);

