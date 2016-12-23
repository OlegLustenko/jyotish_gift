/* Created by dev on 19.11.16. */
'use strict';
import './Login.css';
import React, { Component } from 'react';


export default class Login extends Component {
    constructor() {
        super();
        this.state = { login: '', password: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('submit');

    }

    handleChange(event) {
        // console.log('e');
        this.setState({ login: event.target.value });
    }

    render() {
        // console.log(LoginStyle);
        return (
            <form onSubmit={this.handleSubmit} className='login'>
          <label htmlFor="login">ENTER LOGIN AND PASSWORD 2</label>
          <input id="login" 
          placeholder="enter your login" 
          type="text" value={this.state.login}
                 onChange={this.handleChange}
                 className='login__client'
                  />
          <input type="password" />
          <input type="submit" value="Submit" />
        </form>
        )
    }
}