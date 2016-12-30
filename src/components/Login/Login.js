/* Created by dev on 19.11.16. */
'use strict';
import './Login.css';
import React, { Component } from 'react';


export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                email: 'oleg@gmail.com',
                password: '123'
            },
            auth: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this._handleLoginChange = this._handleLoginChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(JSON.stringify(this.state.user));
        fetch('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(this.state.user),
            headers: {         
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(x => {
            console.log(x);
            this.setState({ auth: x.statusText });
        }).then(x => {
            // this.setState({ auth: x });
        })
    }

    _handleLoginChange(e) {
        let email = e.target.value;

        this.setState({
            user: {
                email
            }
        });
        console.log(this.state);
    }
    _handlePasswordChange(e) {
        let password = e.target.password;
        this.setState({
            user: {
                password
            }
        });
    }

    render() {
        // console.log(LoginStyle);
        let {email, password} = this.state.user;
        return (
            <form onSubmit={this.handleSubmit} className='login'>
                <label htmlFor="login">ENTER LOGIN AND PASSWORD</label>
                <input id="login"
                    placeholder="enter your login"
                    type="text"
                    value={email}
                    onChange={this._handleLoginChange}
                    className='login__client'
                    />
                <input type="password" value={password} onChange={this._handlePasswordChange} />
                <input type="submit" value="Submit" />
                {this.state.auth}
            </form>
        )
    }
}