import webpack from 'webpack';
import path from 'path';
import precss from 'precss';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin, { extract } from 'extract-text-webpack-plugin';
// import postcssImport from 'postcss-import';

export default {
  // context: __dirname + '/src',
  entry: {
    app: ['eventsource-polyfill',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      './src/client'],
    vendor: ['react', 'react-dom', 'react-router']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].js'
    // library: '[name]'
  },
  resolve: {},
  
  resolveLoader: {},
  //devServer: {
  //  hot: true,
  //  historyApiFallback: true,
  //  proxy: 3000,
  //  port: 3001
  //},
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor-min.js'}),
    // new ExtractTextPlugin()
    new ExtractTextPlugin({
      // filename: "css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]",
      filename: "css/[name].css",
      disable: false,
      allChunks: true
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: {
          postcss: (wp) => [require("postcss-cssnext")()]
        }
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'stage-2', 'react'],
        'env': {
          'development': {
            'presets': ['react-hmre']
          }
        }
        
      },
      exclude: /node_modules/,
      include: path.join(__dirname, 'src')
    }, {
      test: /\.(woff|woff2|ttf|svg|eot|png|svg|jpg|gif)$/,
      loader: 'file?name=[path][name].[ext]'
    }, {
      test: /\.css$/,
      loader: extract({
        notExtractLoader: "style-loader",
        loader: "css-loader"
        // publicPath: "../"
      }),
      // options: {
      //   postcss: (wp) => [require("postcss-cssnext")()]
      // }
    },
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader', 'css-loader', 'postcss-loader'
      //   ],
      //   // loader: "style-loader!css-loader!postcss-loader",
      //   options: {
      //     postcss: (wp) => [require("postcss-cssnext")()]
      //   }
      // }
      // use: [
      
      //   { loader: 'style' },
      //   { loader: 'css' },
      //   { loader: 'postcss' }
      // ],
      // options: {
      //   postcss: (wp) => [postcssImport({ addDependencyTo: wp }), precss, autoprefixer]
      // }
      // }
    ]
  }
};