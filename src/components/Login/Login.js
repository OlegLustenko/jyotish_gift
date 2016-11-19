/* Created by dev on 19.11.16. */
'use strict';

import React, { Component } from 'react';


export default class Login extends Component {
  constructor() {
    super();
    this.state = {login: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }
  
  handleChange(event) {
    console.log('e');
    this.setState({value: event.target.value});
  }
  
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="login">ENTER LOGIN AND PASSWORD</label>
          <input id="login" placeholder="enter your login" type="text" value={this.state.login}
                 onChange={this.handleChange}/>
          <input type="password"/>
          <input type="submit" value="Submit" />
        </form>
    )
  }
}