// @flow

import React, { Fragment, PureComponent } from 'react';
import Helmet from 'react-helmet';
import { withRouter, type Match } from 'react-router-dom';
import { type QueryRenderProps } from 'react-apollo';

import RepositoriesQuery, { type Data, type Variables } from './RepositoriesQuery';
import query from './Repositories.graphql';

import {
  ErrorState,
  Loading,
  NoData,
  List,
  RepoCard,
  ScrollOnBottom,
} from '../../../../components';

type Props = {
  match: Match,
};

type State = {
  stopScrollListening: boolean,
  loadMoreLoading: boolean,
};

class Repositories extends PureComponent<Props, State> {
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

    if (error || !data || !data.developer) {
      this.setState({ stopScrollListening: true });
      return;
    }

    this.setState({ loadMoreLoading: true }, () => {
      fetchMore({
        variables: {
          offset: data.developer.repositories.length,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return prev;
          }

          if (fetchMoreResult.developer.repositories.length === 0) {
            this.setState({ stopScrollListening: true, loadMoreLoading: false }, () => prev);
          }

          this.setState({ loadMoreLoading: false });

          return {
            ...prev,
            developer: {
              ...prev.developer,
              repositories: [
                ...prev.developer.repositories,
                ...fetchMoreResult.developer.repositories,
              ],
            },
          };
        },
      });
    });
  };

  render() {
    const { match } = this.props;
    const { stopScrollListening, loadMoreLoading } = this.state;

    return (
      <RepositoriesQuery
        query={query}
        variables={{
          username: match.params.username || '',
          limit: 30,
          offset: 0,
          orderBy: { field: 'STARS', direction: 'DESC' },
        }}
        fetchPolicy="cache-and-network"
      >
        {({ loading, error, data, fetchMore }) => {
          if (loading && !loadMoreLoading && (data && !data.developer)) {
            return <Loading />;
          }

          if (error) {
            return <ErrorState />;
          }

          if (!data || !data.developer) {
            return null;
          }

          if (data.developer.repositories.length === 0) {
            return <NoData text="Bu geliştirici için repo bulunamadı." />;
          }

          return (
            <Fragment>
              <Helmet>
                <title>
                  {`${data.developer.name || data.developer.username} İçin Meşhur Repolar`}
                </title>
              </Helmet>

              <ScrollOnBottom
                threshold={100}
                stopListening={stopScrollListening === true}
                onReach={() => {
                  this.getMore({ loading, data, error, fetchMore });
                }}
              >
                <List columns={2}>
                  {data.developer.repositories.map((repo, index) => (
                    <RepoCard
                      key={repo.slug}
                      rank={index + 1}
                      slug={repo.slug}
                      description={repo.description}
                      language={repo.language}
                      stars={repo.stars}
                      forks={repo.forks}
                    />
                  ))}
                </List>

                {loading && <Loading />}
              </ScrollOnBottom>
            </Fragment>
          );
        }}
      </RepositoriesQuery>
    );
  }
}

export default withRouter(Repositories);
