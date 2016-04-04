const wallabyWebpack = require('wallaby-webpack');
const webpackPostprocessor = wallabyWebpack({});

module.exports = function (wallaby) {

  return {
    files: [
      { pattern: '!src/**/*.spec.js', load: false }
    ],

    tests: [
      { pattern: 'src/**/*.spec.js', load: false }
    ],

    compilers: {
      'src/**/*.js': wallaby.compilers.babel()
    },

    postprocessor: webpackPostprocessor,

    bootstrap: function () {
      window.__moduleBundler.loadTests();
    }
  };
};