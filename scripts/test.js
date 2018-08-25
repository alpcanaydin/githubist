const path = require('path');
const dotenv = require('dotenv');

// eslint-disable-next-line jest/no-jest-import
const jest = require('jest');

dotenv.load({ path: path.resolve(__dirname, '../.env') });

process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

process.on('unhandledRejection', err => {
  throw err;
});

const argv = process.argv.slice(2);

// Watch unless on CI or in coverage mode
if (!process.env.CI && argv.indexOf('--coverage') < 0) {
  argv.push('--watch');
}

if (process.env.CI) {
  argv.push('--maxWorkers=2');
}

jest.run(argv);
