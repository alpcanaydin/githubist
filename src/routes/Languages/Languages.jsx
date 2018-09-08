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

import LanguagesQuery from './LanguagesQuery';
import query from './Languages.graphql';

import ByScore from './tabs/ByScore';
import ByTotalDevelopers from './tabs/ByTotalDevelopers';
import ByTotalRepositories from './tabs/ByTotalRepositories';

import styles from './Languages.scss';

const Languages = () => (
  <LanguagesQuery query={query}>
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
            <title>Diller</title>
          </Helmet>
          <Container>
            <PageHeading
              title="Diller"
              subtitle={`Github.ist üzerinde toplam ${data.turkey.totalLanguages.toLocaleString()} dil bulunuyor.`}
            />

            <LinkBar className={styles.linkBar}>
              <LinkBarItem exact to="/languages">
                Sıralama
              </LinkBarItem>
              <LinkBarItem exact to="/languages/developers">
                Geliştirici Sayısına Göre
              </LinkBarItem>
              <LinkBarItem exact to="/languages/repositories">
                Repo Sayısına Göre
              </LinkBarItem>
            </LinkBar>

            <Switch>
              <Route exact path="/languages" component={ByScore} />
              <Route exact path="/languages/developers" component={ByTotalDevelopers} />
              <Route exact path="/languages/repositories" component={ByTotalRepositories} />
            </Switch>
          </Container>
        </Fragment>
      );
    }}
  </LanguagesQuery>
);

export default Languages;
