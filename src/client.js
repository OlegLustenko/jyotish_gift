import './style.css';

import ReactDOM from 'react-dom';
import React from 'react';
import App from './app';
import { BrowserRouter } from 'react-router';
import { AppContainer } from 'react-hot-loader';

let rootEl = document.getElementById('app');

ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContainer>
    , rootEl);


console.log('... 4');

if ( module.hot ) {
  module.hot.accept('./app', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./app').default;
    //const {BrowserRouter} = require('react-router');
    ReactDOM.render(
        <AppContainer>
          <BrowserRouter>
            <NextApp />
          </BrowserRouter>
        </AppContainer>,
        rootEl);
  });
}


