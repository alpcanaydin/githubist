const { join, resolve } = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ExtractCssChunksPlugin = require('extract-css-chunks-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const StatsWebpackPlugin = require('stats-webpack-plugin');
const DotenvPlugin = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const common = require('./common');
const sassLoaderConfig = require('./sassLoaderConfig');

const outputPath = join(__dirname, '../build/static');
const untouchedFiles = join(__dirname, '../public');

module.exports = merge(common, {
  mode: 'production',
  name: 'client',
  target: 'web',
  entry: [join(__dirname, '../src/index')],
  devtool: 'hidden-source-map',
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: outputPath,
    publicPath: process.env.PUBLIC_PATH,
  },
  module: {
    rules: [sassLoaderConfig({ isServer: false, env: 'production' })],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          output: {
            comments: false,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
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
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new ExtractCssChunksPlugin({
      filename: '[name].[chunkhash].css',
      chunkFilename: '[id].[chunkhash].css',
    }),
    new StatsWebpackPlugin('stats.json'),
    new CopyWebpackPlugin([{ from: untouchedFiles, to: outputPath }]),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: '../../bundle-report.html',
    }),
  ],
});
