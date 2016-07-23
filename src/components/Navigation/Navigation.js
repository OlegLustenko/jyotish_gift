import React, {Component} from 'react';

class Navigation extends Component {
  constructor(){
    super()
  }
  render(){
    return (
      <nav className="navbar navbar-light bg-faded">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home
            </Link>
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
        {/*<Loader/>*/}
      </nav>
    )
  }
}

export default Navigation
