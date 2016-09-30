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
  resolve: {},

  resolveLoader: {},
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor-min.js' })
  ],
  module: {
    loaders: [{
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
        use: [
          { loader: 'style' },
          { loader: 'css' },
          { loader: 'postcss' }
        ],
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