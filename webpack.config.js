const PATH = require('path');
const webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: PATH.join(__dirname),
    hot: true,
    port: 3000
  },
  entry: PATH.resolve(__dirname, 'index.js'),
  mode: 'development',
  module: {

  },
  output: {
    filename: 'index.js',
    path: PATH.resolve(__dirname)
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  target: 'web'
};