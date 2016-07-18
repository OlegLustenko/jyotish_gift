import passport from 'koa-passport';
import {Strategy as LocalStrategy} from 'passport-local';
import User from '../models/user';

passport.serializeUser(async function (user, done) {
  done(null, user.id); // uses _id as idField
});

passport.deserializeUser(function (id, done) {
  User.findById(id, done);
});

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function (email, password, done) {

  if (!email || !password)
    this.throw(404);

  await function (callback) {
    setTimeout(callback, 100)
  };

  email = email.toLowerCase();

  var user = await User.findOne({email: email}).exec();

  if (!user || !user.checkPassword(password)) {
    this.throw(404)
  }
  // function (err, user) {
  //  if (err) {
  //    return done(err);
  //  }

  //  if (!user || !user.checkPassword(password)) {
  //    // don't say whether the user exists
  //    return done(null, false, { message: 'Нет такого пользователя или пароль неверен.' });
  //  }
  //  return done(null, user);
}).then(function (user) {
  done(null, user);
}, function (err) {
  if (err) {
    done(null, false, "Пользователь не найден")
  } else {
    done(err);
  }

});}));

let passportInitialize = passport.initialize();

export default async function localPassport(ctx, next) {
Object.defineProperty(this, 'user', {
  get: function () {
    return this.req.user;
  }
});

await passportInitialize.call(ctx, next);

};
