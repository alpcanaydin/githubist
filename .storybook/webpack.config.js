// @flow

const { join } = require('path');
const ExtractCssChunksPlugin = require('extract-css-chunks-webpack-plugin');
const merge = require('webpack-merge');

const common = require('../webpack/common');
const sassLoaderConfig = require('../webpack/sassLoaderConfig');

module.exports = merge(common, {
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [join(__dirname, '../node_modules'), join(__dirname, '../src')],
  },
  module: {
    rules: [sassLoaderConfig({ isServer: false, env: 'dev' })],
  },
  plugins: [
    new ExtractCssChunksPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
});
