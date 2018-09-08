// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './Homepage';
import Repositories from './Repositories';
import Languages from './Languages';
import Locations from './Locations';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/repositories" component={Repositories} />
    <Route path="/languages" component={Languages} />
    <Route path="/locations" component={Locations} />
  </Switch>
);

export default Routes;
