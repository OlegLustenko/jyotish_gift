import passport from 'koa-passport';
import {Strategy as LocalStrategy} from 'passport-local';
import {User} from '../../../models';

let Strategy = new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, async(email, password, done) => {

  if (!email || !password)
    this.throw(404);

  await function (callback) {
    setTimeout(callback, 100)
  };

  email = email.toLowerCase();

  let user = await User.findOne({email: email})
    .exec();

  // if (!user || !user.checkPassword(password)) {
  if (!user) {
    // don't say whether the user exists
    return done(null, false, {message: 'User or password is incorrect'})
    // this.throw(404)
  }
  // function (err, user) {
  //  if (err) {
  //    return done(err);
  //  }

  //  if (!user || !user.checkPassword(password)) {

  //    return done(null, false, { message: 'Нет такого пользователя или пароль неверен.' });
  //  }
  return done(null, user);
});

export default Strategy
