import compose from 'koa-compose';
import convert from 'koa-convert';
import views from 'koa-views';
import logger from 'koa-logger';
import koa_static from 'koa-static';
import bodyParser from 'koa-bodyparser';
import asyncBusboy from './multiPart';
import sessionStore from './mongooseSession';
import passport from './passport-initialize';
// import views from './views';

import {config} from 'config';

export default function middlewares() {
  return compose([
    logger(),
    koa_static('dist'),
    bodyParser(),
    asyncBusboy(),
    views(config.projectRoot + '/dist', {html: 'underscore'}),
    convert(sessionStore)
    // sessionStore(),,
  ])

}
