// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './Homepage';
import Developers from './Developers';
import Language from './Language';
import Languages from './Languages';
import Locations from './Locations';
import Repositories from './Repositories';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/developers" component={Developers} />
    <Route path="/languages" component={Languages} />
    <Route path="/language/:slug" component={Language} />
    <Route path="/locations" component={Locations} />
    <Route path="/repositories" component={Repositories} />
  </Switch>
);

export default Routes;
