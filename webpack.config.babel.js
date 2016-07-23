import webpack from 'webpack';
import path from 'path';
import precss from 'precss';
import autoprefixer from 'autoprefixer';

export default {
  entry : {
    app: './src/client',
    vendor: [
      'react', 'react-dom', 'react-router',
    ],
  },
  output : {
    path: 'dist',
    publicPath: '/',
    filename: '[name].js',
    library: '[name]',
  },
  resolve : {
    modulesDirectories: ['node_modules'],
    extensions: [
      '',
      '.js',
      '.css',
      '.html',
      '.styl',
      '.jsx',
    ],
  },

  resolveLoader : {
    modulesDirectories: ['node_modules'],
    moduleTemplates: [
      '*-loader', '*',
    ],
    extensions: [
      '',
      '.js',
      '.css',
      '.html',
      '.styl',
      '.jsx',
    ],
  },
  plugins : [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: "vendor-min.js"}),
    // new HtmlWebpackPlugin({
    //   template: './client/index.html'
    // }),
    // new webpack.HotModuleReplacementPlugin(),,,,,,,,,,,,,
  ],
  module : {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        query: {
          presets: ['react', 'es2015',]
        },
        include: path.join(__dirname, 'src'),
      }, {
        test: /\.(woff|woff2|ttf|svg|eot|png|svg|jpg|gif)$/,
        loader: 'file?name=[path][name].[ext]'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
      },
    ]
  },
  postcss:() => [precss, autoprefixer],
  devServer : {
    publicPath: '/',
    inline: true,
    historyApiFallback: true,
    port: 9000,
    proxy: 3000,
    host: 'localhost',
  },
}
