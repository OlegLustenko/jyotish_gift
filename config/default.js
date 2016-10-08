/**
 * Created by admin on 25.06.2016.
 */
'use strict';
import { CONSTS } from './consts';
// import defer from 'config/defer';

import path from 'path';

let mongodbUri;

if (!process.env.MONGODB_URL) {
  mongodbUri = `mongodb://sa:1qaz2wsx@ds013182.mlab.com:13182/gift`;
  // mongodbUri = `localhost/gift`;
}
const NODE_ENV = process.env.NODE_ENV === 'production';

console.log(NODE_ENV, process.env.NODE_ENV);
const config = {
  consts: CONSTS,
  host: {
    ip: NODE_ENV ? '10.129.8.143' : 'localhost',
    port: NODE_ENV ? 8080 : 3000
  },
  crypto: {
    hash: {
      length: 128,
      // may be slow(!): iterations = 12000 take ~60ms to generate strong password
      iterations: NODE_ENV ? 12000 : 1
    }
  },
  keys: ['mysecret'],
  mongoose: {
    uri: process.env.MONGODB_URL || mongodbUri,
    options: {
      server: {
        socketOptions: {
          keepAlive: 1
        },
        poolSize: 5
      },
      db: {
        nativeParser: true
      }
    }
  },

  projectRoot: process.cwd()
};

export { config };