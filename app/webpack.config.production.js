// const webpack = require('webpack');
const devConfig = require('./webpack.config');
const WebpackMd5Hash = require('webpack-md5-hash');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
const BabiliPlugin = require('babili-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const prodConfig = Object.assign({}, devConfig);

prodConfig.output.filename = '[name].[chunkhash].js';

// Consistent, deterministic hashes
prodConfig.plugins.push(new WebpackMd5Hash());

// Inline the manifest
prodConfig.plugins.push(new InlineManifestWebpackPlugin());

// Uglification and Minification
prodConfig.plugins.push(new BabiliPlugin());

// Gzip it up
prodConfig.plugins.push(new CompressionPlugin());

module.exports = prodConfig;
