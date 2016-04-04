'use strict';

const webpackConfig = require('./webpack.config');
const wallabyWebpack = require('wallaby-webpack');
const webpackPostprocessor = wallabyWebpack(webpackConfig);

module.exports = function (wallaby) {

  return {
    files: [
      { pattern: 'src/**/*.js', load: false }
    ],

    tests: [
      { pattern: 'src/**/*test.js', load: false }
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },

    postprocessor: webpackPostprocessor,

    bootstrap: function () {
      window.__moduleBundler.loadTests();
    }
  };
};