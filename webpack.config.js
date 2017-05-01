const path = require('path');

const client = {
  entry: './src/client.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'built'),
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
}

module.exports = [
  client
];
