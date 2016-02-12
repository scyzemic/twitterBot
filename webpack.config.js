var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = [
  {
    name: 'frontend',
    entry: [
      'webpack-dev-server/client?http://localhost:8080',
      'webpack/hot/only-dev-server',
      './client/src/index.js',
    ],
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/frontend/',
      filename: 'frontend.js'
    },
    module: {
      loaders: [
        {
          test:/\.jsx?$/,
          exclude: /node_modules/,
          loader: 'react-hot!babel'
        },
      ]
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './client',
      hot: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
      devtool: 'sourcemap'
  },
  {
    name: 'backend',
    entry: './server/server.js',
    target: 'node',
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/backend/',
      filename: 'backend.js'
    },
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel'
        },
      ]
    },
    externals: nodeModules,
    plugins: [
      new webpack.IgnorePlugin(/\.(css|less)$/),
      new webpack.BannerPlugin('require("source-map-support").install();',
                                { raw: true, entryonly: false }),
    ],
    devtool: 'sourcemap'
  },
];
