const ExtractCssChunksPlugin = require('extract-css-chunks-webpack-plugin');
const autoprefixer = require('autoprefixer');

const sassLoader = ({ isServer = false, env = 'dev' }) => {
  const localIdentName = env === 'dev' ? '[name]__[local]--[hash:base64:5]' : '_[hash:base64:5]';
  const cssLoader = isServer ? 'css-loader/locals' : 'css-loader';

  const use = [
    {
      loader: cssLoader,
      options: {
        modules: true,
        localIdentName,
      },
    },
    {
      loader: 'postcss-loader',
      options: {
        plugins: [autoprefixer('last 2 version')],
      },
    },
    'sass-loader',
  ];

  const output = {
    test: /\.scss$/,
    exclude: /node_modules/,
    use: isServer ? use : [ExtractCssChunksPlugin.loader, ...use],
  };

  return output;
};

module.exports = sassLoader;
