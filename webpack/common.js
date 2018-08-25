const webpack = require('webpack');
const { join, resolve } = require('path');
const DotenvPlugin = require('dotenv-webpack');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [join(__dirname, '../node_modules'), join(__dirname, '../src')],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            options: {
              failOnError: true,
            },
          },
        ],
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        use: 'graphql-tag/loader',
      },
      {
        test: /\.(png|ico|gif|svg|jpe?g)(\?[a-z0-9]+)?$/,
        use: 'url-loader',
      },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] },
    ],
  },
  plugins: [
    new DotenvPlugin({
      path: resolve(__dirname, '../.env'),
    }),
    new webpack.IgnorePlugin(/\/iconv-loader$/),
  ],
};
