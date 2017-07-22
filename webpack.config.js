const webpack = require('webpack');
const path = require('path');
const DotenvPlugin = require('webpack-dotenv-plugin');
require("babel-polyfill");

module.exports = {
  devtool: 'inline-sourcemap',
  entry: [
    'babel-polyfill',
    './src/entry.js',
  ],
  output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js',
      publicPath: '/public/'
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
        test: /\.svg$/,
        loader: 'raw-loader'
      },
      {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass']
      },
    ]
  },
  plugins: [
    new DotenvPlugin({
      sample: './.env.example',
      path: './.env'
    })
  ]
};
