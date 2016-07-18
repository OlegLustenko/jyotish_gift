'use strict';

// if (process.env.TRACE) {
  require('./server/libs/trace');
// }


import Koa from 'koa';
import fs from 'fs';
import middlewares from './server/middlewares';
import routes from './server/routes';
import restall from './server/libs/restall';
import {config} from 'config';
import {connectDatabase} from './server/libs/mongoose';

(async() => {
  await connectDatabase()
})()
const app = new Koa();
app.keys = config.keys;
app.use(middlewares());


let handlers = fs.readdirSync('./server/handlers');
handlers.forEach(handler => {
  // console.log(require('./server/handlers/' + handler)[handler]());
  app.use(require('./server/handlers/' + handler)[handler]())
});

// console.log(app);
app.use(routes());
app.listen(3000, 'localhost', () => console.log('Server in running at %s:%d', config.host.ip, config.host.port));
