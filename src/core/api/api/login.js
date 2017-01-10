import passport from 'koa-passport';

export default (router) => {

  router.post('/auth/login', async (ctx, next) => {
    let middleware = passport.authenticate('local', async (user, info) => {
      console.log(ctx.req)
      if (user === false) {
        ctx.status = 401;
        ctx.body = info
      } else {
        await ctx.login(user);
        // await ctx.rememberMe();
        ctx.body = {
          user: user
        }
      }
    });
    await middleware.call(this, ctx, next);
  })
}
