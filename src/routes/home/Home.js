import React, { Component } from 'react';
import Match from 'react-router/Match';
import Login from '../../components/Login';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Match pattern="/login" component={Login} />
        <Match pattern="/jyotish" component={Login} />
      </div>
    );
  }
}

export default Home;