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
    </AppContainer>, rootEl);

if (module.hot) {
  const reporter = window.__webpack_hot_middleware_reporter__;
  const success = reporter.success;
  reporter.success = function() {
    document.querySelectorAll('link[href][rel=stylesheet]').forEach((link) => {
      const nextStyleHref = link.href.replace(/(\?\d+)?$/, `?${Date.now()}`);
      link.href = nextStyleHref;
    });
    success();
  };


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