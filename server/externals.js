// @flow

const path = require('path');
const fs = require('fs');

module.exports = fs
  .readdirSync(path.resolve(__dirname, '../node_modules'))
  .filter(x => !/\.bin|react-universal-component|webpack-flush-chunks/.test(x))
  .reduce(
    (prev, cur) => ({
      ...prev,
      [cur]: `commonjs ${cur}`,
    }),
    {},
  );
