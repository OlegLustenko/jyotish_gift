export default (router) => {
  router
    .get('*', async(ctx, next) => {
      if (ctx.request.url.slice(1, 4) === 'api') return await next();
      await ctx.render('index.html');
    })
}