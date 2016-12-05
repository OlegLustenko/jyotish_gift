'use strict';

// if (!process.env.TRACE) {
//   require('./server/libs/trace');
// }

import Koa from 'koa';
import fs from 'fs';
import middlewares from './core/middlewares';
import { dev } from './core/middlewares/index';
import api from './core/api';
import routes from './routes';
import { config } from 'config';

import { connectDatabase } from './core/libs/mongoose';
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { ServerRouter, createServerRenderContext } from 'react-router'
import { join } from 'path';
import React from 'react';
import App from './app';
import { AppContainer } from 'react-hot-loader';

(async() => {
  await connectDatabase()
})();
const app = new Koa();
app.keys = config.keys;
app.use(middlewares());

let handlers = fs.readdirSync(join(__dirname, 'core/handlers'));
handlers.forEach(handler => {
  app.use(require('./core/handlers/' + handler)[ handler ]())
});
app.use(api());

app.use(async(ctx, next) => {
  
  //console.log(ctx.request.url);
  //if ( ctx.request.url == '/__webpack_hmr' ) return await next();
  
  const context = createServerRenderContext();
  let htmlMarkup = (content) => `<html>
    <head></head>
    <body class="xxx">
    <div id="app">${content}</div>  
    <script src="js/vendor-min.js"></script>
    <script src="js/app.js"></script>
  </body>
  </html>
`;
  // render the first time
  let markup = renderToStaticMarkup(
      <ServerRouter location={ctx.url} context={context}>
        <App />
      </ServerRouter>
  );
  
  const result = context.getResult();
  
  // the result will tell you if it redirected, if so, we ignore
  // the markup and send a proper redirect.
  if ( result.redirect ) {
    ctx.redirect(result.redirect.pathname);
    await next();
  } else {
    
    // the result will tell you if there were any misses, if so
    // we can send a 404 and then do a second render pass with
    // the context to clue the <Miss> components into rendering
    // this time (on the client they know from componentDidMount)
    if ( result.missed ) {
      markup = renderToStaticMarkup(
          <AppContainer >
            <ServerRouter location={ctx.url} context={context}>
              <App />
            </ServerRouter>
          </AppContainer>
      )
    }
    ctx.type = 'text/html; charset=utf-8';
    ctx.body = htmlMarkup(markup);
  }
  await next();
});


app.listen({ ...config.host }, () => console.log('Server in running at %s:%d', config.host.ip, config.host.port));