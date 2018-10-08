// @flow

import React, { Fragment } from 'react';
import { withRouter, Switch, Route, type Match } from 'react-router-dom';
import Helmet from 'react-helmet';

import {
  Avatar,
  Container,
  ErrorState,
  Loading,
  LinkBar,
  LinkBarItem,
  NotFound,
} from '../../components';

import DeveloperQuery from './DeveloperQuery';
import query from './Developer.graphql';

import GeneralInfo from './tabs/GeneralInfo';
import Repositories from './tabs/Repositories';
import Languages from './tabs/Languages';

import styles from './Developer.scss';

type Props = {
  match: Match,
};

const Developer = ({ match }: Props) => (
  <DeveloperQuery query={query} variables={{ username: match.params.username || '' }}>
    {({ loading, error, data }) => {
      if (loading) {
        return <Loading />;
      }

      if (error && error.graphQLErrors.length > 0 && error.graphQLErrors[0].code === 404) {
        return <NotFound />;
      }

      if (error || !data || !data.developer) {
        return <ErrorState />;
      }

      return (
        <Fragment>
          <Helmet>
            <title>{data.developer.name}</title>
          </Helmet>
          <Container>
            <section className={styles.heading}>
              <Avatar url={data.developer.avatarUrl} alt={data.developer.name} />
              <div className={styles.info}>
                <div className={styles.nameAndUsername}>
                  <h1 className={styles.name}>{data.developer.name}</h1>
                  <span className={styles.username}>{data.developer.username}</span>
                </div>

                <p className={styles.bio}>
                  {data.developer.bio || 'Bu geliştirici için bir açıklama bulunmuyor.'}
                </p>
              </div>
            </section>

            <div className={styles.links}>
              <LinkBar>
                <LinkBarItem exact to={`/${data.developer.username}`}>
                  Genel Bilgiler
                </LinkBarItem>
                <LinkBarItem exact to={`/${data.developer.username}/repositories`}>
                  Meşhur Repolar
                </LinkBarItem>
                <LinkBarItem exact to={`/${data.developer.username}/languages`}>
                  Dil Kullanımı
                </LinkBarItem>
              </LinkBar>
              <a
                href={data.developer.githubUrl}
                className={styles.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github&apos;ta Görüntüle
              </a>
            </div>

            <Switch>
              <Route exact path="/:username" component={GeneralInfo} />
              <Route exact path="/:username/repositories" component={Repositories} />
              <Route exact path="/:username/languages" component={Languages} />
            </Switch>
          </Container>
        </Fragment>
      );
    }}
  </DeveloperQuery>
);

export default withRouter(Developer);
