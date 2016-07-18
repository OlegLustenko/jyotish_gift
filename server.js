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

// let handlers = fs.readdirSync('./server/handlers');
// handlers.forEach(handler => {
//   app.use(require('./server/handlers/' + handler).default())
// });

app.use(middlewares());
// app.use(handlers());
app.use(routes());

app.listen(3000, 'localhost', () => console.log('Server in running at %s:%d', config.host.ip, config.host.port));
