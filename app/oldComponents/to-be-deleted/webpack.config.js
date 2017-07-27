const webpack = require('webpack');
const path = require('path');
const DotenvPlugin = require('webpack-dotenv-plugin');
require("babel-polyfill");

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


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
    // new BundleAnalyzerPlugin(),
    new DotenvPlugin({
      sample: './.env.example',
      path: './.env'
    }),
    // new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
  ]
};
