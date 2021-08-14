import React from 'react';
import ReactDOM from 'react-dom';
import App from './home';
import { createGlobalStyle } from 'styled-components';

const GloabalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`;


ReactDOM.render(
  <React.StrictMode>
    <GloabalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
