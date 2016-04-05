const path = require('path');

module.exports = {
  entry: {
    'bundle': './src'
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(path.dirname(), 'build'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.js|jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css?'
      }
    ]
  }
};
