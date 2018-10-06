// @flow

import React, { Fragment, PureComponent } from 'react';
import Helmet from 'react-helmet';
import { withRouter, type Match } from 'react-router-dom';
import { type QueryRenderProps } from 'react-apollo';

import RepositoriesQuery, { type Data, type Variables } from './RepositoriesQuery';
import query from './Repositories.graphql';

import { ErrorState, Loading, List, RepoCard, ScrollOnBottom } from '../../../../components';

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

    if (error || !data || !data.language) {
      this.setState({ stopScrollListening: true });
      return;
    }

    this.setState({ loadMoreLoading: true }, () => {
      fetchMore({
        variables: {
          offset: data.language.repositories.length,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return prev;
          }

          if (fetchMoreResult.language.repositories.length === 0) {
            this.setState({ stopScrollListening: true, loadMoreLoading: false }, () => prev);
          }

          this.setState({ loadMoreLoading: false });

          return {
            ...prev,
            language: {
              ...prev.language,
              repositories: [
                ...prev.language.repositories,
                ...fetchMoreResult.language.repositories,
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
          slug: match.params.slug || '',
          limit: 30,
          offset: 0,
          orderBy: { field: 'STARS', direction: 'DESC' },
        }}
        fetchPolicy="cache-and-network"
      >
        {({ loading, error, data, fetchMore }) => {
          if (loading && !loadMoreLoading && (data && !data.language)) {
            return <Loading />;
          }

          if (error) {
            return <ErrorState />;
          }

          if (!data || !data.language) {
            return null;
          }

          return (
            <Fragment>
              <Helmet>
                <title>{`${data.language.name} İçin Meşhur Repolar`}</title>
              </Helmet>

              <ScrollOnBottom
                threshold={100}
                stopListening={stopScrollListening === true}
                onReach={() => {
                  this.getMore({ loading, data, error, fetchMore });
                }}
              >
                <List columns={2}>
                  {data.language.repositories.map((repo, index) => (
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
