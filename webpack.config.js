var path = require('path');
var merge = require('webpack-merge');
var fs = require('fs');
var webpack = require('webpack');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);

var isDev = TARGET === 'dev';

var entryPath = [path.resolve(ROOT_PATH, 'client', 'components', 'App.jsx')];

var jsxLoader = ['babel?stage=1'];

if(isDev) {
  jsxLoader.unshift('react-hot');
}

var common = {
  entry: entryPath,
  output: {
    path: path.resolve(ROOT_PATH, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      'actions': path.resolve(ROOT_PATH, 'client', 'actions'),
      'components': path.resolve(ROOT_PATH, 'client', 'components'),
      'libs': path.resolve(ROOT_PATH, 'client', 'libs'),
      'stores': path.resolve(ROOT_PATH, 'client', 'stores')
    },
    extensions: ['', '.js', '.jsx']
  },
  debug: false,
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: jsxLoader
    },
    {
      test: /\.less$/,
      loader: "style!css!less"
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url?mimetype=image/jpg'
    }]
  }
}

if(TARGET === 'build') {
  common = merge(common, {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  });
}

if(TARGET === 'dev') {
  common = merge(common, {
    devtool: "#inline-source-map"
  });
}

module.exports = common;