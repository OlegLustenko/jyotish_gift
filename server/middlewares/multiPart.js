import asyncBusboy from 'async-busboy';

export default function () {

  return async function (ctx, next) {

    if (!ctx.request.is('multipart/*')) {
      console.log('multipart')
      return await next();
    }
    const {files, fields,} = await asyncBusboy(ctx.req);

    for (let key in fields) {
      ctx.request.body[key] = fields[key];
    }

    await next();
  }
}
//
