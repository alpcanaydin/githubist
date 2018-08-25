const { resolve } = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const WriteFilePlugin = require('write-file-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');

const common = require('./common');
const sassLoaderConfig = require('./sassLoaderConfig');

module.exports = merge(common, {
  mode: 'development',
  name: 'server',
  target: 'node',
  entry: ['regenerator-runtime/runtime.js', resolve(__dirname, '../server/render')],
  devtool: 'source-map',
  output: {
    path: resolve(__dirname, '../dist/server'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        type: 'javascript/auto',
        test: /\.mjs$/,
        use: [],
      },
      sassLoaderConfig({ isServer: true, env: 'dev' }),
    ],
  },
  resolve: {
    extensions: ['.js', '.css', '.scss'],
  },
  plugins: [
    new DotenvPlugin({
      path: resolve(__dirname, '../.env'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new WriteFilePlugin(),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
});
