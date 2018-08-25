const path = require('path');
const express = require('express');
const chalk = require('chalk');
const webpack = require('webpack');
const dotenv = require('dotenv');

dotenv.load({ path: path.resolve(__dirname, '../.env') });

const clearConsole = require('react-dev-utils/clearConsole');
const { choosePort, prepareUrls } = require('react-dev-utils/WebpackDevServerUtils');
const openBrowser = require('react-dev-utils/openBrowser');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

const clientConfig = require('../webpack/client.development');
const serverConfig = require('../webpack/server.development');

const app = require('../server/app');

const { publicPath } = clientConfig.output;

const DEFAULT_PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

/* $FlowIgnoreNextLine */
const isInteractive = process.stdout.isTTY;

let isBuilt = false;

const done = async () => {
  if (!isBuilt) {
    const port = await choosePort(HOST, DEFAULT_PORT);
    const urls = prepareUrls('http', HOST, port);

    app.listen(port, HOST, err => {
      if (err) {
        console.log(err);
        return;
      }
      isBuilt = true;

      if (isInteractive) {
        clearConsole();
      }

      console.log(chalk.cyan(`Running on local network at ${urls.lanUrlForConfig}:${port}`));
      console.log(chalk.cyan('Starting the development server...\n'));

      openBrowser(urls.localUrlForBrowser);
    });
  }
};

const compiler = webpack([clientConfig, serverConfig]);
const clientCompiler = compiler.compilers[0];
const options = { publicPath, serverSideRender: true, stats: { colors: true } };
const devMiddleware = webpackDevMiddleware(compiler, options);

app.use(express.static(path.join(__dirname, '../public')));
app.use(devMiddleware);
app.use(webpackHotMiddleware(clientCompiler));
app.use(webpackHotServerMiddleware(compiler));

devMiddleware.waitUntilValid(done);
