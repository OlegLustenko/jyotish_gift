import views from 'koa-views';
import { join } from 'path';
const {projectRoot} = require('config').default;

export default () => views(join(projectRoot, 'dist'), {html: 'underscore'})
