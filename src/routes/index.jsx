// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './Homepage';
import Repositories from './Repositories';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/repositories" component={Repositories} />
  </Switch>
);

export default Routes;
