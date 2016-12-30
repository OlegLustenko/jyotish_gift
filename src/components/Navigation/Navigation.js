import React, { Component } from 'react';
import Login from '../Login';
import Match from 'react-router/Match';
import Link from 'react-router/Link';
import './Navigation.css';

class Navigation extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <nav className="header__nav">
          <Link to="/jyotish" className="nav__logo">Jyotish Gift</Link>
          <li className="nav__logo-item">
            <Link to="/gift">Gift 3</Link>
          </li>
          <li className="nav__logo-item">
            <Link to="/Oleg">Oleg</Link>
          </li>
          <li className="nav__logo-item">
            <Link to="/Astrology">Astrology</Link>
          </li>
          <li className="nav__logo-item">
            <Link to="/login">Test Login</Link>
          </li>
        </nav>
        <Match pattern="/login" component={Login} />
        <Match pattern="/jyotish" component={Login} />
      </div>
    )
  }
}

export default Navigation
