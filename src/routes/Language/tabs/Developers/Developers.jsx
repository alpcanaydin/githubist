// @flow

import React, { Fragment, PureComponent } from 'react';
import Helmet from 'react-helmet';
import { withRouter, type Match } from 'react-router-dom';
import { type QueryRenderProps } from 'react-apollo';

import DevelopersQuery, { type Data, type Variables } from './DevelopersQuery';
import query from './Developers.graphql';

import { ErrorState, Loading, List, DeveloperCard, ScrollOnBottom } from '../../../../components';

type Props = {
  match: Match,
};

type State = {
  stopScrollListening: boolean,
  loadMoreLoading: boolean,
};

class Developers extends PureComponent<Props, State> {
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
          offset: data.language.developerUsage.length,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return prev;
          }

          if (fetchMoreResult.language.developerUsage.length === 0) {
            this.setState({ stopScrollListening: true, loadMoreLoading: false }, () => prev);
          }

          this.setState({ loadMoreLoading: false });

          return {
            ...prev,
            language: {
              ...prev.language,
              developerUsage: [
                ...prev.language.developerUsage,
                ...fetchMoreResult.language.developerUsage,
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
      <DevelopersQuery
        query={query}
        variables={{
          slug: match.params.slug || '',
          limit: 30,
          offset: 0,
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
                <title>{`${data.language.name} İçin Geliştirici Kullanımı`}</title>
              </Helmet>

              <ScrollOnBottom
                threshold={100}
                stopListening={stopScrollListening === true}
                onReach={() => {
                  this.getMore({ loading, data, error, fetchMore });
                }}
              >
                <List columns={2}>
                  {data.language.developerUsage.map((developerUsage, index) => (
                    <DeveloperCard
                      key={developerUsage.developer.username}
                      rank={index + 1}
                      name={developerUsage.developer.name}
                      username={developerUsage.developer.username}
                      profilePicture={developerUsage.developer.avatarUrl}
                      company={developerUsage.developer.company}
                      totalStarred={developerUsage.developer.totalStarred}
                      followers={developerUsage.developer.followers}
                      repositoriesCount={developerUsage.repositoriesCount}
                      repoText={`${data.language.name} Reposu`}
                      location={developerUsage.developer.location}
                    />
                  ))}
                </List>

                {loading && <Loading />}
              </ScrollOnBottom>
            </Fragment>
          );
        }}
      </DevelopersQuery>
    );
  }
}

export default withRouter(Developers);
