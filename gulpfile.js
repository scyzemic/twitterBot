var DeepMerge = require('deep-merge');
var webpack = require('webpack');
var nodemon = require('nodemon');
var gulp = require('gulp');
var path = require('path');
var fs = require('fs');

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
      { test: /\.js$/, exclude: /node_modules/, loader: 'react-hot!babel' },
    ],
  },
};

if (process.env.NODE_ENV !== 'production') {
  defaultConfig.devtool = '#eval-source-map';
  defaultConfig.debug = true;
}

function config(overrides) {
  return deepmerge(defaultConfig, overrides || {});
}

//Front-End

var frontendConfig = config({
  entry: './client/src/index.js',
  output: {
    path: path.join(__dirname, 'client/build'),
    filename: 'frontend.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});

//Back-End

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

var backendConfig = config({
  entry: './server/server.js',
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
});

//Tasks

function onBuild(done) {
  return function (err, stats) {
    if (err) {
      console.error(err);
    } else {
      console.log(stats.toString());
    }

    if (done) {
      done();
    }
  };
}

gulp.task('frontend-build', function (done) {
  webpack(frontendConfig).run(onBuild(done));
});

gulp.task('frontend-watch', function () {
  webpack(frontendConfig).watch(100, onBuild());
});

gulp.task('backend-build', function (done) {
  webpack(backendConfig).run(onBuild(done));
});

gulp.task('backend-watch', function () {
  webpack(backendConfig).watch(100, function (err, stats) {
    onBuild()(err, stats);
    nodemon.restart();
  });
});

gulp.task('build', ['frontend-build', 'backend-build']);
gulp.task('watch', ['frontend-watch', 'backend-watch']);

gulp.task('run', ['backend-watch', 'frontend-watch'], function () {
  nodemon({
    execMap: {
      js: 'node',
    },
    scripts: path.join(__dirname, 'server/build/backend'),
    ignore: ['*'],
    watch: ['foo/'],
    ext: 'noop',
  }).on('restart', function () {
    console.log('Restarted!');
  });
});
