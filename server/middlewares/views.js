import views from 'koa-views';
import {config} from 'config';

export default function () {
  return views(config.projectRoot + '/dist')
}
//
