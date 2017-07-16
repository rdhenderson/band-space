var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'inline-sourcemap',
  entry: [
    './src/entry.js',
    "font-awesome/scss/font-awesome.scss"
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
      {
        test: /font-awesome\.config\.js/,
        use: [
          { loader: 'style-loader' },
          { loader: 'font-awesome-loader' },
        ],
      },
    ]
  }
};
