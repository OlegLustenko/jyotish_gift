import webpack from 'webpack';
import path from 'path';
import precss from 'precss';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin, { extract } from 'extract-text-webpack-plugin';
// import postcssImport from 'postcss-import';
const PUBLICPATH = '/src/';
const isDebug = true;
export default [{
        // context: __dirname + '/src',
        entry: {
            app: ['react-hot-loader/patch', 'webpack-hot-middleware/client', './src/client'],
            vendor: ['react-hot-loader/patch', 'webpack-hot-middleware/client', 'react', 'react-dom', 'react-router']
        },
        output: {
            path: path.resolve('dist'),
            publicPath: PUBLICPATH,
            filename: '[name].js',
            //chunkFilename: '[name].js'
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

            new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor-min.js' }),
            new ExtractTextPlugin({
                filename: "styles.css",
                // filename: "css/[name].css",
                disable: false,
                allChunks: true
            }),
            // new ExtractTextPlugin("styles.css"),
            //new ExtractTextPlugin('app.css', {
            //  allChunks: true
            //}),
            new webpack.LoaderOptionsPlugin({
                options: {
                    context: __dirname,
                    postcss: [
                        require("postcss-cssnext")
                    ]

                }
            })
        ],
        module: {
            rules: [{
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    include: path.join(__dirname, 'src')
                }, {
                    test: /\.(woff|woff2|ttf|svg|eot|png|svg|jpg|gif)$/,
                    loader: 'file?name=[path][name].[ext]'
                }, {
                    test: /\.css$/,
                    loader: extract({
                        notExtractLoader: "style-loader",
                        loader: [{
                                loader: 'css-loader',
                                options: {
                                    modules: true
                                }
                            },
                            {
                                loader: 'postcss-loader'
                            }
                        ],
                        publicPath: PUBLICPATH
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
    },
    // {
    //   entry: {
    //     server: './src/server.js'
    //   },

    //   output: {
    //     filename: 'dist/server.js',
    //     libraryTarget: 'commonjs2'
    //   },

    //   target: 'node',

    //   externals: [
    //     /^\.\/assets$/,
    //     (context, request, callback) => {
    //       const isExternal =
    //           request.match(/^[@a-z][a-z/.\-0-9]*$/i) && !request.match(/\.(css|less|scss|sss)$/i);
    //       callback(null, Boolean(isExternal));
    //     },
    //   ],

    //   plugins: [
    //     // Define free variables
    //     // https://webpack.github.io/docs/list-of-plugins.html#defineplugin
    //     new webpack.DefinePlugin({
    //       'process.env.NODE_ENV': isDebug ? '"development"' : '"production"',
    //       'process.env.BROWSER': false,
    //       __DEV__: isDebug,
    //     }),
    //     new webpack.IgnorePlugin(/\.(css|less)$/),

    //     // Do not create separate chunks of the server bundle
    //     // https://webpack.github.io/docs/list-of-plugins.html#limitchunkcountplugin
    //     new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1}),

    //     // Adds a banner to the top of each generated chunk
    //     // https://webpack.github.io/docs/list-of-plugins.html#bannerplugin
    //     new webpack.BannerPlugin({
    //       raw: true,
    //       banner: 'require("source-map-support").install();',
    //     }),
    //   ],
    //   module: {
    //     loaders: [{
    //       test: /\.js$/,
    //       loader: 'babel-loader',
    //       exclude: /node_modules/,
    //       //include: path.resolve(config.projectRoot, 'src')
    //     }]
    //   },

    //   node: {
    //     console: false,
    //     global: false,
    //     process: false,
    //     Buffer: false,
    //     __filename: false,
    //     __dirname: false,
    //   },

    //   devtool: isDebug ? 'cheap-module-source-map' : 'source-map',
    // }
];