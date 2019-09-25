// @flow

import React, { Fragment } from 'react';
import { withRouter, Switch, Route, type Match } from 'react-router-dom';
import Helmet from 'react-helmet';

import {
  Container,
  ErrorState,
  Loading,
  NotFound,
  PageHeading,
  LinkBar,
  LinkBarItem,
} from '../../components';

import LocationQuery from './LocationQuery';
import query from './Location.graphql';

import GeneralInfo from './tabs/GeneralInfo';
import Repositories from './tabs/Repositories';
import Developers from './tabs/Developers';
import Languages from './tabs/Languages';

type Props = {
  match: Match,
};

const Location = ({ match }: Props) => (
  <LocationQuery query={query} variables={{ slug: match.params.slug || '' }}>
    {({ loading, error, data }) => {
      if (loading) {
        return <Loading />;
      }

      if (error && error.graphQLErrors.length > 0 && error.graphQLErrors[0].code === 404) {
        return <NotFound />;
      }

      if (error || !data || !data.location) {
        return <ErrorState />;
      }

      const metaTitle = `${data.location.name} - GitHub.ist`;
      const metaDesc = `${data.location.name} için Github Türkiye istatistikleri`;

      return (
        <Fragment>
          <Helmet>
            <title>{data.location.name}</title>
            <meta name="description" content={metaDesc} />

            <meta name="og:description" content={metaDesc} />
            <meta name="og:title" content={metaTitle} />

            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDesc} />
          </Helmet>
          <Container>
            <PageHeading
              title={data.location.name}
              subtitle={`Bu şehir için toplam ${data.location.totalDevelopers.toLocaleString()} geliştrici ve ${data.location.totalRepositories.toLocaleString()} repo bulunuyor.`}
            />

            <LinkBar>
              <LinkBarItem exact to={`/location/${data.location.slug}`}>
                Genel Bilgiler
              </LinkBarItem>
              <LinkBarItem exact to={`/location/${data.location.slug}/repositories`}>
                Meşhur Repolar
              </LinkBarItem>
              <LinkBarItem exact to={`/location/${data.location.slug}/developers`}>
                Meşhur Geliştiriciler
              </LinkBarItem>
              <LinkBarItem exact to={`/location/${data.location.slug}/languages`}>
                Dil Kullanımı
              </LinkBarItem>
            </LinkBar>

            <Switch>
              <Route exact path="/location/:slug" component={GeneralInfo} />
              <Route exact path="/location/:slug/repositories" component={Repositories} />
              <Route exact path="/location/:slug/developers" component={Developers} />
              <Route exact path="/location/:slug/languages" component={Languages} />
            </Switch>
          </Container>
        </Fragment>
      );
    }}
  </LocationQuery>
);

export default withRouter(Location);
