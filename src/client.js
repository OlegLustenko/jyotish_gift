import ReactDOM from 'react-dom';
import React from 'react';
import App from './app';
import { BrowserRouter } from 'react-router';

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>, document.getElementById('app'));


