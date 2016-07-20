import {User} from '../../models';
//USER
//@@ firstName
//@@ lastName
//@@ email
//@@ password
export default(router) => {
  router
    .post('/user/auth', async function (ctx, next) {
      // let user;
      let { ...req } = ctx.request.body;

      let user = await User
        .find(req)
        .exec();

      if (!user.length) {
        user = await User.create({firstName: req.firstName, lastName: req.lastName, email: req.email, password: req.password,})
      }
      ctx.body = user;
      await next();
    })
    .get('/users', async(ctx, next) => {
      console.log('qwe');
      let users = await User
        .find({})
        .lean();
      ctx.body = users;
      await next();
    })

}
