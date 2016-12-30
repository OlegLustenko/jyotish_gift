import React, { Component } from 'react';
import Login from '../Login';
import Match from 'react-router/Match';
import Link from 'react-router/Link';
import './Navigation.css';

const Logo = (): void => (
  <li className="nav__logo">
    <Link to="/jyotish">Jyotish Gift</Link>
  </li>
)

class Navigation extends Component {
  constructor() {
    super();
  }
  render(): any {
    return (
      <nav className="header__nav">
        <Logo />
        <li className="nav__logo-item">
          <Link to="/Astrology">Консультации</Link>
        </li>
        <li className="nav__logo-item">
          <Link to="/login">Login</Link>
        </li>
      </nav>
    )
  }
}

export default Navigation;