import './styles/style.css';

import Match from 'react-router/Match'
import Link from 'react-router/Link'

import React from 'react';

// let mountNode = document.getElementById('app');

const ParamsExample = () => {
  return (
    <div>
        <h2>Accounts</h2>
        <ul>
          <li><Link to="/netflix">Netflix</Link></li>
          <li><Link to="/zillow-group">Zillow Group</Link></li>
          <li><Link to="/yahoo">Yahoo</Link></li>
          <li><Link to="/modus-create">Modus Create</Link></li>
        </ul>

        <Match pattern="/:id" component={ Child } />
      </div>
  );
};

const Child = ({ params }) => {
  return (
    <div>
      <h3>ID: {params.id}</h3>
    </div>
  );
};


export default ParamsExample;

// const appHistory = useRouterHistory(createHistory)({ queryKey: false });
// match({ routes, location }, () => {
// render(<ParamsExample />, mountNode);
// });