import views from 'koa-views';
import { config } from 'config';
import { join } from 'path';

export default () => views(join(config.projectRoot, 'dist'), { html: 'underscore' })
