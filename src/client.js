import ReactDOM from 'react-dom';
import React from 'react';
import App from './app';
import { BrowserRouter } from 'react-router';
import { AppContainer } from 'react-hot-loader';

let rootEl = document.getElementById('app');

ReactDOM.render(<BrowserRouter>
  <App />
</BrowserRouter>, rootEl);


//if ( module.hot ) {
//  module.hot.accept('./App', () => {
//    // If you use Webpack 2 in ES modules mode, you can
//    // use <App /> here rather than require() a <NextApp />.
//    //const NextApp = require('./App').default;
//    ReactDOM.render(
//        <AppContainer>
//          <App />
//        </AppContainer>,
//        rootEl
//    );
//  });
//}


