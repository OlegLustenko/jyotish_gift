import React, {Component} from 'react';
// import {Navigation} from '../Navigation';
import Header from '../Header';
import Footer from '../Footer';


class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default App;
