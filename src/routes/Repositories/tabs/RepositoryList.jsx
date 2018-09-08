// @flow

import React, { Fragment, PureComponent } from 'react';
import Helmet from 'react-helmet';
import { type QueryRenderProps } from 'react-apollo';

import { type RepositoryOrder } from '../../../types/repository';

import RepositoryListQuery, { type Data, type Variables } from './RepositoryListQuery';
import query from './RepositoryList.graphql';

import { ErrorState, Loading, RepoCard, ScrollOnBottom } from '../../../components';

import styles from './RepositoryList.scss';

type Props = {
  title: string,
  orderBy: RepositoryOrder,
  includeDate?: boolean,
};

type State = {
  stopScrollListening: boolean,
  loadMoreLoading: boolean,
};

class RepositoryList extends PureComponent<Props, State> {
  state = {
    stopScrollListening: false,
    loadMoreLoading: false,
  };

  static defaultProps = {
    includeDate: false,
  };

  getMore = ({ loading, error, data, fetchMore }: $Shape<QueryRenderProps<Data, Variables>>) => {
    if (loading) {
      return;
    }

    if (error || !data || !data.repositories) {
      this.setState({ stopScrollListening: true });
      return;
    }

    this.setState({ loadMoreLoading: true }, () => {
      fetchMore({
        variables: {
          offset: data.repositories.length,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return prev;
          }

          if (fetchMoreResult.repositories.length === 0) {
            this.setState({ stopScrollListening: true, loadMoreLoading: false }, () => prev);
          }

          this.setState({ loadMoreLoading: false });

          return {
            ...prev,
            repositories: [...prev.repositories, ...fetchMoreResult.repositories],
          };
        },
      });
    });
  };

  render() {
    const { title, orderBy, includeDate = false } = this.props;
    const { stopScrollListening, loadMoreLoading } = this.state;

    return (
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
          if (loading && !loadMoreLoading) {
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
                stopListening={stopScrollListening === true}
                onReach={() => {
                  this.getMore({ loading, data, error, fetchMore });
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
  }
}

export default RepositoryList;
