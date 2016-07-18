// import fs from 'fs';
// import {config} from 'config';
// import path from 'path';

// function getIndex() {
//   let index;
//   fs.readFile(path.join(config.projectRoot, 'dist/index.html'), 'utf8', (err, data) => {
//     index = 'error';
//     if (err) {
//       return;
//     }
//     index = data;
//   })
//   return index
// };

export default(router) => {
  router.get('/*', async function (ctx, next) {
    await ctx.render('index.html');
  })
}
