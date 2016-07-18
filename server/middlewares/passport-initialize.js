import passport from 'koa-passport';
import {Strategy as LocalStrategy} from 'passport-local';
import {User} from '../models';

passport.serializeUser(async function (user, done) {
  done(null, user.id); // uses _id as idField
});

passport.deserializeUser(function (id, done) {
  User.findById(id, done);
});

let Strategy = new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, async function (email, password, done) {

  if (!email || !password)
    this.throw(404);

  await function (callback) {
    setTimeout(callback, 100)
  };

  email = email.toLowerCase();

  var user = await User.findOne({email: email}).exec();

  if (!user || !user.checkPassword(password)) {
    return done(null, false, {message: 'User or password is incorrect'})
    // this.throw(404)
  }
  // function (err, user) {
  //  if (err) {
  //    return done(err);
  //  }

  //  if (!user || !user.checkPassword(password)) {
  //    // don't say whether the user exists
  //    return done(null, false, { message: 'Нет такого пользователя или пароль неверен.' });
  //  }
   return done(null, user);
});

passport.use(Strategy);
let passportInitialize = passport.initialize();

export default async function (next) {
  Object.defineProperty(this, 'user', {
    get: function () {
      return this.req.user;
    }
  });

  await passportInitialize.call(this, next);

};
