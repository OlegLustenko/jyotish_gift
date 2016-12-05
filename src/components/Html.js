import React, { PropTypes } from 'react';
//import Serve
//import { analytics } from '../config';

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    style: PropTypes.string,
    script: PropTypes.string,
    chunk: PropTypes.string,
    children: PropTypes.string,
  };
  
  render() {
    const { title, description, script } = this.props;
    return (
        <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
          <title>{title}</title>
          <meta name="description" content={description}/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </head>
        <body>
        <div id="app"/>
        <script src="vendor-min.js"/>
        <script src="app.js"/>
        </body>
        </html>
    
    );
  }
}

export default Html;
