// import compose from 'koa-compose';
import Router from 'koa-router';

//USER
//@@ firstName
//@@ lastName
//@@ email
//@@ password
export default function routes() {

  return new Router()
  .get('/', async function (ctx, next) {
    console.log('hello')
    ctx.body = '<h1>DADADADA</h1>'
    await next();
  }).routes()

}
