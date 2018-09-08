// @flow

import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import { type RepositoryOrder } from '../../../types/repository';

import RepositoryListQuery from './RepositoryListQuery';
import query from './RepositoryList.graphql';

import { ErrorState, Loading, RepoCard, ScrollOnBottom } from '../../../components';

import styles from './RepositoryList.scss';

type Props = {
  title: string,
  orderBy: RepositoryOrder,
  includeDate?: boolean,
};

const RepositoryList = ({ title, orderBy, includeDate = false }: Props) => (
  <RepositoryListQuery
    query={query}
    variables={{
      limit: 30,
      offset: 0,
      orderBy,
      includeDate,
    }}
    fetchPolicy="cache-and-network"
  >
    {({ loading, error, data, fetchMore }) => {
      if (loading && !data) {
        return <Loading />;
      }

      if (error) {
        return <ErrorState />;
      }

      if (!data || !data.repositories) {
        return null;
      }

      return (
        <Fragment>
          <Helmet>
            <title>{title}</title>
          </Helmet>

          <ScrollOnBottom
            threshold={100}
            onReach={() => {
              if (loading) {
                return;
              }

              fetchMore({
                variables: {
                  offset: data.repositories.length,
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                  if (!fetchMoreResult) {
                    return prev;
                  }

                  return {
                    ...prev,
                    repositories: [...prev.repositories, ...fetchMoreResult.repositories],
                  };
                },
              });
            }}
          >
            <div className={styles.repositories}>
              {data.repositories.map((repo, index) => (
                <RepoCard
                  key={repo.slug}
                  rank={index + 1}
                  slug={repo.slug}
                  description={repo.description}
                  language={repo.language}
                  stars={repo.stars}
                  forks={repo.forks}
                  githubCreatedAt={repo.githubCreatedAt}
                />
              ))}
            </div>

            {loading && <Loading />}
          </ScrollOnBottom>
        </Fragment>
      );
    }}
  </RepositoryListQuery>
);

RepositoryList.defaultProps = {
  includeDate: false,
};

export default RepositoryList;
