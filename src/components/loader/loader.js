import React, {Component} from 'react';

import './loader.css';

export default class Loader extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="wrapper">

        <div className="bouncing_ball">
          <div className="ball"></div>
        </div>

        <h1 className="loading">Loader
          <span className="dot_one">.</span>
          <span className="dot_two">.</span>
          <span className="dot_three">.</span>
        </h1>
      </div>
    )
  }
}
