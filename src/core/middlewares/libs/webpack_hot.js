import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';
import { PassThrough } from 'stream';
const {webpackConfig} = require('config').default;
const compiler = webpack(webpackConfig[0]);

export const dev = ((compiler, opts = {}) => {
  const middleware = devMiddleware(compiler, opts);
  return async(ctx, next) => {
    await middleware(ctx.req, {
      end: (content) => {
        ctx.body = content
      },
      setHeader: (...args) => {
        ctx.set.apply(ctx, args)
      }
    }, next)
  }
})(compiler, {
  publicPath: webpackConfig[0].output.publicPath,
  noInfo: true,
  stats: {
    colors: true,
  }
});

export const hot = ((compiler, opts = {}) => {
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
})(compiler, {hot: true});
