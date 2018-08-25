const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');
const dotenv = require('dotenv');

dotenv.load({ path: path.resolve(__dirname, '../.env') });

const clientConfig = require('../webpack/client.production');
const serverConfig = require('../webpack/server.production');

process.on('unhandledRejection', err => {
  throw err;
});

// TODO: Dotenv

const { measureFileSizesBeforeBuild } = FileSizeReporter;
const { printFileSizesAfterBuild } = FileSizeReporter;
const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;

const build = () => {
  console.log('Creating an optimized production build...');

  const compiler = webpack([clientConfig, serverConfig]);

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }

      const messages = formatWebpackMessages(stats.toJson({}, true));

      if (messages.errors.length) {
        return reject(new Error(messages.errors.join('\n\n')));
      }

      return resolve({
        stats: stats.stats[0],
        warnings: messages.warnings,
      });
    });
  });
};

const main = async () => {
  try {
    const buildPath = path.resolve(__dirname, '../build');
    const staticPath = path.resolve(buildPath, 'static');

    const previousFileSizes = await measureFileSizesBeforeBuild(staticPath);
    fs.emptyDirSync(buildPath);

    const { stats, warnings } = await build(previousFileSizes);

    if (warnings.length) {
      console.log(chalk.yellow('Compiled with warnings.\n'));
      console.log(warnings.join('\n\n'));
    } else {
      console.log(chalk.green('Compiled successfully.\n'));
    }

    console.log('File sizes after gzip:\n');
    printFileSizesAfterBuild(
      stats,
      previousFileSizes,
      staticPath,
      WARN_AFTER_BUNDLE_GZIP_SIZE,
      WARN_AFTER_CHUNK_GZIP_SIZE,
    );
  } catch (err) {
    console.log(chalk.red('Failed to compile.\n'));
    console.log(`${err.message || err}\n`);
    process.exit(1);
  }
};

main();
