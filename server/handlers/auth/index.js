import passport from 'koa-passport';
import importDir from 'import-dir';
import {User} from '../../models';
import {LocalStrategy} from './strategies';

passport.use('local', LocalStrategy);

passport.serializeUser(async(user, done) => {
  done(null, user._id); // uses _id as idField
});
passport.deserializeUser((id, done) => {
  (async() => {
    try {
      const user = await User.findById(id, done);
      done(null, user)
    } catch (error) {
      done(error)
    }
  })();
});

let passportInitialize = passport.initialize();
export function auth(ctx, next) {
  //... in process. Wrapper about passport user
  // this.locals = {
  //   get user() {
  //     return ctx.req.user
  //   }
  // }
  //
  // Object.defineProperty(this, 'user', {
  //   get: () => this.req.user
  // })
  return passportInitialize
}
