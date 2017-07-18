const webpack = require('webpack');
const path = require('path');
const DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = {
  devtool: 'inline-sourcemap',
  entry: [
    './src/entry.js'
  ],
  output: {
      path: path.join(__dirname, 'public'),
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
  },
  plugins: [
    new DotenvPlugin({
      sample: './.env.default',
      path: './.env'
    })
  ]
};
