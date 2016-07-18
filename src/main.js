import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import {
    Router,
    Route,
    IndexRoute,
    Link,
    IndexLink,
    browserHistory
} from 'react-router';

import {Loader} from './components/loader';

import './styles/style.css'

let mountNode = document.getElementById('app');

let Navigation = () => {
  return (
      <nav className="navbar navbar-light bg-faded">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home </Link>
          </li>
          <li className="nav-item">
            <Link to="profile">Profile</Link>
          </li>
          <li className="nav-item">
            <Link to="login">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="logout">Logout</Link>
          </li>
        </ul>
        <Loader />
      </nav>
  )
}

class App extends Component {
  render() {
    return (
        <div>
          <h1 className="btn btn-primary">Home</h1>
          <Navigation/>
        </div>
    )
  }
}

class Profile extends Component {
  render() {
    return (
        <div>
          <h1 className="btn btn-primary">profile</h1>
          <Navigation/>
        </div>
    )
  }
}

class Logout extends Component {
  render() {
    return (
        <div>
          <h1 className="btn btn-primary">logout</h1>
          <Navigation/>
        </div>
    )
  }
}

class Login extends Component {
  constructor() {
    super();
    this.register = this.register.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    // console.log(this)
    return false;
  }

  generateFormData(refs) {
    return Object.keys(refs).reduce((prev, curr)=> {
      console.log(curr, refs[curr]);
      prev[curr] = ReactDOM.findDOMNode(refs[curr]).value;
      return refs;
    }, {})
  }

  register(e) {
    e.preventDefault();
    let url = '/api/user/auth';
    // let formData = {
    //     email: React.findDOMNode(this.refs.email).value
    // }
    let formData = this.generateFormData(this.refs);
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
        .then((data)=>console.log(data))
        .catch((err)=>console.log(err));
  }

  render() {
    let style = {
      marginTop: 15
    };

    return (
        <div className="container" style={style}>
          <h1 className="btn btn-primary">Login</h1>
          <form onSubmit={this.register}>
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 form-control-label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" placeholder="Email" ref="email"/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 form-control-label">firstName</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" placeholder="firstName" ref="firstName"/>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 form-control-label">lastName</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" placeholder="lastName" ref="lastName"/>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="inputPassword3" className="col-sm-2 form-control-label">Password</label>
              <div className="col-sm-10">
                <input
                    type="password"
                    className="form-control"
                    id="inputPassword3"
                    placeholder="Password"
                    ref="password"
                />
              </div>
            </div>
            <button className="btn btn-primary btn-block">Registration</button>
          </form>
          <Navigation/>
        </div>
    )
  }
}
ReactDOM.render(
    <Router history={browserHistory}>
      <Route path='/' component={App}/>
      <Route path='profile' component={Profile}/>
      <Route path='logout' component={Logout}/>
      <Route path='login' component={Login}/>
    </Router>, mountNode)
