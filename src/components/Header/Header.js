// @flow;
import React, { Component } from 'react';
import Navigation from '../Navigation';
import './Header.css';

class Header extends Component {
  render(): JSX.Element {
    return (
      <header className="header">
        <Navigation />
      </header>
    );
  }
}


export default Header;
