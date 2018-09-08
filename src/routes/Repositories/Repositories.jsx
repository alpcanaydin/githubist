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

import RepositoriesQuery from './RepositoriesQuery';
import query from './Repositories.graphql';

import ByStars from './tabs/ByStars';
import ByForks from './tabs/ByForks';
import ByDate from './tabs/ByDate';

import styles from './Repositories.scss';

const Repos = () => (
  <RepositoriesQuery query={query}>
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
            <title>Repolar</title>
          </Helmet>
          <Container>
            <PageHeading
              title="Repolar"
              subtitle={`Github.ist üzerinde toplam ${data.turkey.totalRepositories.toLocaleString()} repository bulunuyor.`}
            />

            <LinkBar className={styles.linkBar}>
              <LinkBarItem exact to="/repositories">
                Star&apos;a Göre
              </LinkBarItem>
              <LinkBarItem exact to="/repositories/forks">
                Fork&apos;a Göre
              </LinkBarItem>
              <LinkBarItem exact to="/repositories/date">
                İlk Repolar
              </LinkBarItem>
            </LinkBar>

            <Switch>
              <Route exact path="/repositories" component={ByStars} />
              <Route exact path="/repositories/forks" component={ByForks} />
              <Route exact path="/repositories/date" component={ByDate} />
            </Switch>
          </Container>
        </Fragment>
      );
    }}
  </RepositoriesQuery>
);

export default Repos;
