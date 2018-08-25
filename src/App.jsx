// @flow

import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import './App.scss';

import Routes from './routes';

const App = () => (
  <Fragment>
    <Helmet>
      <title>Github.ist</title>
    </Helmet>

    <div id="main">
      <Routes />
    </div>
  </Fragment>
);

export default App;
