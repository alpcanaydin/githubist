// @flow

import React, { Fragment } from 'react';
import { withRouter, type Match } from 'react-router-dom';
import Helmet from 'react-helmet';

import {
  Container,
  ErrorState,
  Loading,
  PageHeading,
  Highlight,
  LinkBar,
  LinkBarItem,
  List,
} from '../../components';

import toDateString from '../../utils/toDateString';

import RepositoryQuery from './RepositoryQuery';
import query from './Repository.graphql';

import styles from './Repository.scss';

type Props = {
  match: Match,
};

const Repository = ({ match }: Props) => (
  <RepositoryQuery
    query={query}
    variables={{ slug: `${match.params.username || ''}/${match.params.repoName || ''}` || '' }}
  >
    {({ loading, error, data }) => {
      if (loading) {
        return <Loading />;
      }

      if (error || !data || !data.repository) {
        return <ErrorState />;
      }

      return (
        <Fragment>
          <Helmet>
            <title>{data.repository.slug}</title>
          </Helmet>
          <Container>
            <PageHeading
              title={data.repository.slug}
              subtitle={data.repository.description || 'Bu repo için bir açıklama bulunmuyor.'}
            />
            <div className={styles.links}>
              <LinkBar>
                <LinkBarItem exact to={`/${data.repository.slug}`}>
                  Genel Bilgiler
                </LinkBarItem>
                <LinkBarItem exact to={`/${data.repository.developer.username}`}>
                  Geliştiriciyi Görüntüle
                </LinkBarItem>
                <LinkBarItem exact to={`/language/${data.repository.language.slug}`}>
                  Dili Görüntüle
                </LinkBarItem>
              </LinkBar>

              <a
                href={data.repository.githubUrl}
                className={styles.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github&apos;ta Görüntüle
              </a>
            </div>

            <List columns={3}>
              <Highlight subject={data.repository.language.name.toLocaleString()} title="Dil" />
              <Highlight subject={data.repository.stats.rank.toLocaleString()} title="Sıralama" />
              <Highlight
                subject={data.repository.stats.languageRank.toLocaleString()}
                title="Dil Sıralaması"
              />
              <Highlight subject={data.repository.stars.toLocaleString()} title="Star" />
              <Highlight subject={data.repository.forks.toLocaleString()} title="Fork" />
              <Highlight
                subject={toDateString(data.repository.githubCreatedAt)}
                title="Oluşturulma Tarihi"
              />
            </List>
          </Container>
        </Fragment>
      );
    }}
  </RepositoryQuery>
);

export default withRouter(Repository);
