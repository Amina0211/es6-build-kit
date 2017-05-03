/* ==========================================================================
   Settings for webpack JavaScript bundling system.
   ========================================================================== */

'use strict';

const webpack = require( 'webpack' );

const webpackConfig = {
  entry: './src/js/main.js',
  module: {
    rules: [ {
      test: /\.js$/,
      use: [ {
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env']
        }
      } ],
      exclude: /node_modules/
    } ]
  },
  output: {
    filename: '[name].min.js'
  },
  plugins: [
    // Change `warnings` flag to true to view linter-style warnings at runtime.
    // UglifyJS commented out for debugging purposes.
    /*new webpack.optimize.UglifyJsPlugin( {
      compress: { warnings: false }
    } )*/
  ]
};

module.exports = webpackConfig;
