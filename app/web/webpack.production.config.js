const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.config');

// Compress the file size down by uglifying everything
baseConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
  compress: {
    warnings: false
  }
}));

// Removes equal or similar files in the final output
baseConfig.plugins.push(new webpack.optimize.DedupePlugin());

// Makes it so things that get used the most occur first in the bundled file.
baseConfig.plugins.push(new webpack.optimize.OccurrenceOrderPlugin(true));

module.exports = baseConfig;
