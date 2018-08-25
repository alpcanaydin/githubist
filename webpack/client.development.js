// @flow

const { join, resolve } = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const WriteFilePlugin = require('write-file-webpack-plugin');
const ExtractCssChunksPlugin = require('extract-css-chunks-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');

const common = require('./common');
const sassLoaderConfig = require('./sassLoaderConfig');

const outputPath = join(__dirname, '../dist/client');
const untouchedFiles = join(__dirname, '../public');

module.exports = merge(common, {
  mode: 'development',
  name: 'client',
  target: 'web',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=false&quiet=false&noInfo=false',
    'react-error-overlay',
    join(__dirname, '../src/index'),
  ],
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: outputPath,
    publicPath: process.env.PUBLIC_PATH,
  },
  module: {
    rules: [sassLoaderConfig({ isServer: false, env: 'dev' })],
  },
  optimization: {
    runtimeChunk: {
      name: 'bootstrap',
    },
    splitChunks: {
      chunks: 'initial',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
        },
      },
    },
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
    new CopyWebpackPlugin([{ from: untouchedFiles, to: outputPath }]),
    new ExtractCssChunksPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),

    new webpack.HotModuleReplacementPlugin(),
  ],
});
