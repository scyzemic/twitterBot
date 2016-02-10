var gulp = require('gulp');
var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var DeepMerge = require('deep-merge');

var deepmerge = DeepMerge(function (target, source, key) {
  if (target instanceof Array) {
    return [].concat(target, source);
  }

  return source;
});

//generic webpack.config

var defaultConfig = {
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
    ],
  },
};

if (process.env.NODE_ENV !== 'production') {
  defaultConfig.devtool = 'source-map';
  defaultConfig.debug = true;
}

function config(overrides) {
  return deepmerge(defaultConfig, overrides || {});
}

//Front-End

var frontendConfig = {
  entry: './client/src/index.js',
  output: {
    path: path.join(__dirname, 'client/build'),
    filename: 'frontend.js',
  },
};

//Back-End

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

var backendConfig = {
  entry: './sever/server.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'server/build'),
    filename: 'backend.js',
  },
  node: {
    __dirname: true,
    __filename: true,
  },
  externals: nodeModules,
  plugins: [
    new webpack.IgnorePlugin(/\.(css|less)$/),
    new webpack.BannerPlugin('require("source-map-support").install();',
      { raw: true, entryOnly: false }),
  ],
};

//Tasks

gulp.task('build-backend', function (done) {
  webpack(config).run(function (err, stats) {
    if (err) {
      console.log('Error', err);
    } else {
      console.log(stats.toString());
    }

    done();
  });
});
