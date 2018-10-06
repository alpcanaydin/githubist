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

import DevelopersQuery from './DevelopersQuery';
import query from './Developers.graphql';

import ByScore from './tabs/ByScore';
import ByTotalStarred from './tabs/ByTotalStarred';
import ByFollowers from './tabs/ByFollowers';
import ByDate from './tabs/ByDate';

const Developers = () => (
  <DevelopersQuery query={query}>
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
            <title>Geliştiriciler</title>
          </Helmet>
          <Container>
            <PageHeading
              title="Geliştiriciler"
              subtitle={`Github.ist üzerinde toplam ${data.turkey.totalDevelopers.toLocaleString()} geliştirici bulunuyor.`}
            />

            <LinkBar>
              <LinkBarItem exact to="/developers">
                Sıralama
              </LinkBarItem>
              <LinkBarItem exact to="/developers/starred">
                Star&apos;lanma Sayısına Göre
              </LinkBarItem>
              <LinkBarItem exact to="/developers/followers">
                Takipçi Sayısına Göre
              </LinkBarItem>
              <LinkBarItem exact to="/developers/date">
                İlk Keşfedenler
              </LinkBarItem>
            </LinkBar>

            <Switch>
              <Route exact path="/developers" component={ByScore} />
              <Route exact path="/developers/starred" component={ByTotalStarred} />
              <Route exact path="/developers/followers" component={ByFollowers} />
              <Route exact path="/developers/date" component={ByDate} />
            </Switch>
          </Container>
        </Fragment>
      );
    }}
  </DevelopersQuery>
);

export default Developers;
