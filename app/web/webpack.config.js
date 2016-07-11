const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',

  entry: './index.js',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ }
    ]
  }
};
