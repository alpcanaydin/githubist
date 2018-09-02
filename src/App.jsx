// @flow

import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import './App.scss';

import Routes from './routes';
import { Header, Footer } from './components';

const App = () => (
  <Fragment>
    <Helmet titleTemplate="%s - Github.ist" defaultTitle="Github.ist">
      <html lang="tr" />
    </Helmet>

    <Header />

    <div id="main">
      <Routes />
    </div>

    <Footer />
  </Fragment>
);

export default App;
