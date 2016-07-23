import React, {Component} from 'react';

export class Profile extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <h1 className="btn btn-primary">profile</h1>
        <Navigation/>
      </div>
    )
  }
}
