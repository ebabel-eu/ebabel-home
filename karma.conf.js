module.exports = function karmaConf(config) {
  config.set({
    browsers: ['PhantomJS'],
    files: [
      { pattern: 'src/**/*.spec.js', watched: false },
    ],
    frameworks: ['jasmine'],
    preprocessors: {
      'src/**/*.spec.js': ['webpack'],
    },
    webpack: {
      module: {
        loaders: [
          { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'babel?presets[]=es2015' },
          { test: /\.html$/, loader: 'raw' },
        ],
      },
      watch: false,
    },
    webpackServer: {
      noInfo: true,
    },
  });
};
