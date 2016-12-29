/* Created by dev on 15.12.16. */
'use strict';
import React, { Component } from 'react';
import Header from './Header';
import './globals.css';
import './variables.css';

class Layout extends Component {

  render() {
    return (
      <div className="layout">
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default Layout;


