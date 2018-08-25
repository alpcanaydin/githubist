// @flow
/* eslint-disable no-console */

import express from 'express';
import chalk from 'chalk';
import render from './render';

const PORT = process.env.PORT || 3000;

const app = require('./app');

/* eslint-disable import/no-unresolved */
/* $FlowIgnoreNextLine */
const clientStats = require('./static/stats.json');
/* eslint-enable import/no-unresolved */

const publicPath = process.env.PUBLIC_PATH || '';
if (!publicPath.startsWith('http')) {
  app.use(publicPath, express.static('static'));
}

app.use(render({ clientStats }));

app.listen(PORT, err => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(chalk.cyan(`Server is running on port ${PORT}`));
});

/* eslint-enable no-console */
