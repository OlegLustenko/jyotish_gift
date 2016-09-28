import './styles/style.css';

import {render} from 'react-dom';
import { createHistory } from 'history';
import { match, useRouterHistory, Router} from 'react-router';
import {Loader} from './components/loader';
import {routes} from './routes';
import React from 'react';

let mountNode = document.getElementById('app');


const appHistory = useRouterHistory(createHistory)({ queryKey: false });
match({ routes, location }, () => {
  render(<Router routes={routes} history={appHistory} onUpdate={() => window.scrollTo(0, 0) }/>, mountNode);
});

