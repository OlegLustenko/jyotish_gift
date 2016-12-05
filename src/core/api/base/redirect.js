export default (router) => {
  router
      .get('*', async(ctx, next) => {
        console.log('hi');
        //console.log(ctx.request.url);
        //if ( ctx.request.url == '/__webpack_hmr' ) return await next();
        
        if ( ctx.request.url.slice(1, 4) === 'api' ) return await next();
        await ctx.render('index.html');
      })
}