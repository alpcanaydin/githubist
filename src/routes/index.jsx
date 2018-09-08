// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './Homepage';
import Repositories from './Repositories';
import Languages from './Languages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/repositories" component={Repositories} />
    <Route path="/languages" component={Languages} />
  </Switch>
);

export default Routes;
