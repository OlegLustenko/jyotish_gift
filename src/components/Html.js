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
    const { title, description, style, script, chunk, children } = this.props;
    return (
        <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="apple-touch-icon" href="apple-touch-icon.png" />
          {style && <style id="css" dangerouslySetInnerHTML={{ __html: style }} />}
        </head>
        <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
        {script && <script src={script} />}
        {chunk && <script src={chunk} />}
        </body>
        </html>
    );
  }
}

export default Html;
