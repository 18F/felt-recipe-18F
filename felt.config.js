'use strict'

/**
 * Standard recipe for Felt
 */

const rollup = require('felt-rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify');

const postcss = require('felt-postcss');
const postcssImport = require('postcss-import');
const cssnext = require('postcss-cssnext');
const sass = require('felt-sass');

const post = postcss({
  plugins: [
    postcssImport(),
    cssnext()
  ],
  options: {
    map: { inline: false }
  }
});

module.exports = {
  // default handlers for each extension
  handlers: {
    '.js': rollup({
      plugins: [
        resolve({
          jsnext: true,
          main: true,
          browser: true
        }),
        commonjs(),
        babel({
          babelrc: false,
          presets: ['es2015-rollup']
        }),
        uglify({
        })
      ],
      sourceMap: true
    }),
    '.scss': sass({
      post: post
    }),
    '.css': post
  }
};
