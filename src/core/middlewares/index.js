import compose from 'koa-compose';
import importDir from 'import-dir';
import middleware from 'koa-webpack';
import webpack from 'webpack';
import webpackConfig from '../../../webpack.config.babel';
const compiler = webpack(webpackConfig[ 0 ]);

const devMiddleware = require('webpack-dev-middleware');
const devMid = (compiler, opts = {}) => {
  const middleware = devMiddleware(compiler, opts);
  return async(ctx, next) => {
    await middleware(ctx.req, {
      end: (content) => {
        console.log(content);
        ctx.body = content
      },
      setHeader: (...args) => {
        ctx.set.apply(ctx, args)
      }
    }, next)
  }
};

const hotMiddleware = require('webpack-hot-middleware');
const { PassThrough } = require('stream');
const hot = (compiler, opts) => {
  const middleware = hotMiddleware(compiler, opts);
  return async(ctx, next) => {
    let stream = new PassThrough();
    ctx.body = stream;
    await middleware(ctx.req, {
      write: stream.write.bind(stream),
      writeHead: (state, headers) => {
        ctx.state = state;
        ctx.set(headers)
      }
    }, next)
  }
}


export default () => {
  return compose([
      //Object.values(importDir('./compose')).map(fn => fn()),
      devMid(compiler, { publicPath: webpackConfig[ 0 ].output.publicPath, stats: { colors: true } }),
      hot(compiler, {hot: true})]
  );
}
