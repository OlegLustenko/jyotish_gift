import compose from 'koa-compose';
import importDir from 'import-dir';
import middleware from 'koa-webpack';
import webpack from 'webpack';
import webpackConfig from '../../../webpack.config.babel';
const compiler = webpack(webpackConfig);


export default () => {
  return compose(Object.values(importDir('./compose')).map(fn => fn()),
      middleware({
        compiler: compiler,
        dev: {publicPath: webpackConfig.output.publicPath, historyApiFallback: true},
        hot: {log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000}
      })
  );
}
