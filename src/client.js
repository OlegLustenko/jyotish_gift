import 'react-hot-loader/patch';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './app';
import { BrowserRouter } from 'react-router';
import { AppContainer } from 'react-hot-loader';
//
let rootEl = document.getElementById('app');

ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContainer>
    , rootEl);

//if ( module.hot ) {
//  //console.log('qqq');
//  module.hot.accept()
//}

console.log('... 8');

if ( module.hot ) {
  module.hot.accept('./app', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./app').default;
    ReactDOM.render(
        <AppContainer>
          <BrowserRouter>
            <NextApp />
          </BrowserRouter>
        </AppContainer>,
        rootEl
    );
  });
}


