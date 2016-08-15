'use strict';

// if (process.env.TRACE) {
// require('./server/libs/trace');
// }

import Koa from 'koa';
import fs from 'fs';
import middlewares from './core/middlewares';
// import routes from './core/api';
import {config} from 'config';
import {connectDatabase} from './core/libs/mongoose';
import ReactDOM , { renderToString } from 'react-dom/server';
import {join} from 'path';
import {match, RoutingContext} from 'react-router';
import {React} from 'react';
import {createLocation} from 'history/lib/createLocation';

(async() => {
  await connectDatabase()
})();
const app = new Koa();
app.keys = config.keys;
app.use(middlewares());
console.log('qwe');

let handlers = fs.readdirSync(join(__dirname, 'core/handlers'));
handlers.forEach(handler => {
  app.use(require('./core/handlers/' + handler)[handler]())
});

app.use(async(ctx,next)=> {
  let location = createLocation(ctx.req.url);
  console.log('test');
  match({ routes, location }, (error, redirectLocation, renderProps) => {
      console.log(error);
      console.log(redirectLocation);
      console.log(renderProps);
      if (redirectLocation) {
        ctx.redirect(redirectLocation.pathname + redirectLocation.search)
      } else if (error) {
        ctx.throw(500, error.message)
      } else if (renderProps == null) {
        ctx.throw(404, 'Not Found')
      } else {
        // set proper HTTP code for if matched route wasn't found
        if (renderProps.components.indexOf(NotFound) != -1) {
          ctx.status = 404
        }
        ctx.response.body = '<html><head><title>Example Koa + React-Router App</title><script src="/dist/bundle.js"></script></head><body onLoad="initApp()">' +
          '<div id="root">' + renderToString(<RoutingContext {...renderProps}/>) + '</div>'
          + '</body></html>'
      }
    })
    await next();
})

// app.use(routes());
app.listen({...config.host},
    () => console.log('Server in running at %s:%d', config.host.ip, config.host.port));
