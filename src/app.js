import Match from 'react-router/Match';
import Link from 'react-router/Link';
import React from 'react';
import Layout from './Layout';

import Html from './components/Html';

const ParamsExample = () => {
  return (
      <div>
        <h2>Accounts</h2>
        <ul>
          <li className="test"><Link to="/jyotish">Jyotish 0</Link></li>
          <li><Link to="/gift">Gift</Link></li>
          <li><Link to="/Oleg">Oleg</Link></li>
          <li><Link to="/Astrology">Astrology</Link></li>
          <li><Link to="/login">Test Login</Link></li>
        </ul>
        
        
        <Match pattern="/login" component={Layout}/>
        <Match pattern="/test/:id" component={ Child }/>
      </div>
  );
};

const Child = ({params}) => {
  return (
      <div>
        <h3>ID: {params.id}</h3>
      </div>
  );
};


export default ParamsExample;
