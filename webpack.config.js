var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-sourcemap',
  entry: './src/js/entry.js',
  output: {
      path: path.join(__dirname, 'src'),
      publicPath: '/src/',
      filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel'
        ]
      },
      {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass']
      },
    ]
  }
};
