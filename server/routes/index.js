// import compose from 'koa-compose';
'use strict';

import Router from 'koa-router';
import importDir from 'import-dir';
import compose from 'koa-compose';

const routerConfig = [
  {
    folder: 'apis',
    prefix: '/api'
  }, {
    folder: 'base',
    prefix: '',
  },
];

//USER
//@@ firstName
//@@ lastName
//@@ email
//@@ password
export default function routes() {

  const composed = routerConfig.reduce((prev, curr) => {
    const routes = importDir('./' + curr.folder);
    const router = new Router({prefix: curr.prefix});

    Object
      .keys(routes)
      .map(name => routes[name](router));

    return [
      router.routes(),
      // router.allowedMethods(),
      ...prev,
    ];
  }, []);
  return compose(composed);
  // return compose([...new Router().get('/api/users',async (ctx, next)=>{console.log('asd'); await next()})])
}
