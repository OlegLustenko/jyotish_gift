/* Created by ollu on 16-Dec-16. */
'use strict';
import webpack from 'webpack';
import path from 'path';
import config from 'config';
const isDebug = true;

export default {
  entry: {
    server: './src/server.js',
  },
  
  output: {
    filename: 'dist/server.js',
    libraryTarget: 'commonjs2',
  },
  
  target: 'node',
  
  externals: [
    /^\.\/assets$/,
    (context, request, callback) => {
      const isExternal =
          request.match(/^[@a-z][a-z/.\-0-9]*$/i) && !request.match(/\.(css|less|scss|sss)$/i);
      callback(null, Boolean(isExternal));
    },
  ],
  
  plugins: [
    // Define free variables
    // https://webpack.github.io/docs/list-of-plugins.html#defineplugin
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isDebug ? '"development"' : '"production"',
      'process.env.BROWSER': false,
      __DEV__: isDebug,
    }),
    new webpack.IgnorePlugin(/\.(css|less)$/),
    
    // Do not create separate chunks of the server bundle
    // https://webpack.github.io/docs/list-of-plugins.html#limitchunkcountplugin
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1}),
    
    // Adds a banner to the top of each generated chunk
    // https://webpack.github.io/docs/list-of-plugins.html#bannerplugin
    //new webpack.BannerPlugin('require("source-map-support").install();',
    //    { raw: true, entryOnly: false }),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      //include: path.resolve(config.projectRoot, 'src')
    }]
  },
  
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
  
  devtool: isDebug ? 'cheap-module-source-map' : 'source-map',
}
