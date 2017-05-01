const webpack = require('webpack');
const path = require('path');
var fs = require('fs');
let nodeModules = {};

fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

const client = {
  entry: './src/client.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'built'),
  },
  devtool: 'source-map',
  target: 'web',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader?modules'
        ]
      }
    ]
  }
}

const server = {
  entry: './src/server.js',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '.'),
  },
  devtool: 'source-map',
  target: 'node',
  externals: nodeModules,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader?modules',
        ]
      }
    ]
  }
}

module.exports = [
  client,
  // server,
];
