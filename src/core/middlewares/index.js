import compose from 'koa-compose';
import importDir from 'import-dir';

import { dev, hot } from './libs/webpack_hot';

export default () => {
  return compose([...Object.values(importDir('./compose')).map(middleware => middleware()),
    dev, hot

  ])
  
}
