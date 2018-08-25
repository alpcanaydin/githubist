const { resolve } = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const DotenvPlugin = require('dotenv-webpack');

const common = require('./common');
const sassLoaderConfig = require('./sassLoaderConfig');
const externals = require('../server/externals');

externals['./static/stats.json'] = 'commonjs ./static/stats.json';

module.exports = merge(common, {
  mode: 'production',
  name: 'server',
  target: 'node',
  externals,
  entry: ['babel-polyfill', resolve(__dirname, '../server/index')],
  devtool: 'hidden-source-map',
  output: {
    path: resolve(__dirname, '../build'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        type: 'javascript/auto',
        test: /\.mjs$/,
        use: [],
      },
      sassLoaderConfig({ isServer: true, env: 'production' }),
    ],
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    new DotenvPlugin({
      path: resolve(__dirname, '../.env'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
});
