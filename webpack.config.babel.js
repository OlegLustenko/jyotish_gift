import webpack from 'webpack';
import path from 'path';
import precss from 'precss';
import autoprefixer from 'autoprefixer';
// import postcssImport from 'postcss-import';

export default {
  // context: __dirname + '/src',
  entry: {
    app: './src/client',
    vendor: ['react', 'react-dom', 'react-router']
  },
  output: {
    path: 'dist',
    publicPath: '/',
    filename: '[name].js',
    library: '[name]'
  },
  resolve: {
    // modules: [            'node_modules'    ]
    // modules: [path.resolve(__dirname, '/src'), 'node_modules'],
    // root: path.resolve('./src'),
  },
  // modules: ['node_modules', __dirname + '/node_modules'],
  resolveLoader: {
    // root: path.resolve('./src'),
    // modules: ['node_modules', '/node_modules']
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor-min.js' })
    // new HtmlWebpackPlugin({
    //   template: './client/index.html'
    // }),
    // new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
          // includePaths: ["src"]
        },
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.(woff|woff2|ttf|svg|eot|png|svg|jpg|gif)$/,
        loader: 'file?name=[path][name].[ext]'
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'postcss'],
        options: {
          postcss: (wp) => [postcssImport({ addDependencyTo: wp }), precss, autoprefixer]
        }
      }
    ]
  },
  devServer: {
    publicPath: '/',
    inline: true,
    historyApiFallback: true,
    port: 9000,
    proxy: 3000,
    host: 'localhost'
  }
};
