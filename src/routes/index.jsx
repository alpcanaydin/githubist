// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFound from '../components/NotFound';

import Homepage from './Homepage';
import Developer from './Developer';
import Developers from './Developers';
import Language from './Language';
import Languages from './Languages';
import Location from './Location';
import Locations from './Locations';
import Repository from './Repository';
import Repositories from './Repositories';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/developers" component={Developers} />
    <Route path="/languages" component={Languages} />
    <Route path="/language/:slug" component={Language} />
    <Route path="/locations" component={Locations} />
    <Route path="/location/:slug" component={Location} />
    <Route path="/repositories" component={Repositories} />
    <Route path="/repository/:username/:repoName" component={Repository} />
    <Route path="/:username" component={Developer} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
