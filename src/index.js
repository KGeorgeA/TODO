import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import App from './components/App/App.js';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f5f5f5;
    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    button {
      font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);