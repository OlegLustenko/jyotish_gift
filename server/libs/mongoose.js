import {config} from 'config';
import mongoose from 'mongoose';

export function connectDatabase() {
  return new Promise((resolve, reject) => {

    if (process.env.MOONGOSE_DEBUG) {
      mongoose.set('debug', true)
    }

    mongoose.connection
      .on('error', error => reject(error))
      .on('close', () => console.log('Database connection closed.'))
      .once('open', () => resolve(mongoose.connections[0]));

    // console.log(config.mongoose.uri, config.mongoose.options)
    console.log('Database ready!')
    // mongoose.Promise = global.Promise;
    mongoose.connect(config.mongoose.uri, config.mongoose.options, (err) => {
      console.log(err)
    });
  })
}
