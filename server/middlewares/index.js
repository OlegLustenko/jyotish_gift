import compose from 'koa-compose';
import importDir from 'import-dir';

export default function middlewares() {

  return compose(Object.values(importDir('./compose'))
    .map(fn => fn()));

  // return compose([
  //   favicon(),
  //   logger(),
  //   koa_static('dist'),
  //   bodyParser(),
  //   views(join(config.projectRoot, 'dist'), { html: 'underscore' }),
  //   sessionStore,
  //   asyncBusboy(),
  // ])

}
