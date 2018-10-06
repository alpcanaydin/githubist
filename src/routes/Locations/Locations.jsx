// @flow

import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import {
  Container,
  ErrorState,
  Loading,
  PageHeading,
  LinkBar,
  LinkBarItem,
} from '../../components';

import LocationsQuery from './LocationsQuery';
import query from './Locations.graphql';

import ByScore from './tabs/ByScore';
import ByTotalDevelopers from './tabs/ByTotalDevelopers';
import ByTotalRepositories from './tabs/ByTotalRepositories';

const Locations = () => (
  <LocationsQuery query={query}>
    {({ loading, error, data }) => {
      if (loading) {
        return <Loading />;
      }

      if (error || !data || !data.turkey) {
        return <ErrorState />;
      }

      return (
        <Fragment>
          <Helmet>
            <title>Şehirler</title>
          </Helmet>
          <Container>
            <PageHeading
              title="Şehirler"
              subtitle={`Github.ist üzerinde toplam ${data.turkey.totalLocations.toLocaleString()} şehir bulunuyor.`}
            />

            <LinkBar>
              <LinkBarItem exact to="/locations">
                Sıralama
              </LinkBarItem>
              <LinkBarItem exact to="/locations/developers">
                Geliştirici Sayısına Göre
              </LinkBarItem>
              <LinkBarItem exact to="/locations/repositories">
                Repo Sayısına Göre
              </LinkBarItem>
            </LinkBar>

            <Switch>
              <Route exact path="/locations" component={ByScore} />
              <Route exact path="/locations/developers" component={ByTotalDevelopers} />
              <Route exact path="/locations/repositories" component={ByTotalRepositories} />
            </Switch>
          </Container>
        </Fragment>
      );
    }}
  </LocationsQuery>
);

export default Locations;
