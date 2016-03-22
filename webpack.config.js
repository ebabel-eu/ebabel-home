module.exports = {
  devtool: 'sourcemap',
  entry: './src/app/app.js',
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'babel?presets[]=es2015' },
       { test: /\.html$/, loader: 'raw' }
    ]
  }
};