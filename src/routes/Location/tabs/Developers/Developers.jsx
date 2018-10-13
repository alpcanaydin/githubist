// @flow

import React, { Fragment, PureComponent } from 'react';
import Helmet from 'react-helmet';
import { withRouter, type Match } from 'react-router-dom';
import { type QueryRenderProps } from 'react-apollo';

import DevelopersQuery, { type Data, type Variables } from './DevelopersQuery';
import query from './Developers.graphql';

import {
  ErrorState,
  Loading,
  NoData,
  List,
  DeveloperCard,
  ScrollOnBottom,
} from '../../../../components';

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

    if (error || !data || !data.location) {
      this.setState({ stopScrollListening: true });
      return;
    }

    this.setState({ loadMoreLoading: true }, () => {
      fetchMore({
        variables: {
          offset: data.location.developers.length,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return prev;
          }

          if (fetchMoreResult.location.developers.length === 0) {
            this.setState({ stopScrollListening: true, loadMoreLoading: false }, () => prev);
          }

          this.setState({ loadMoreLoading: false });

          return {
            ...prev,
            location: {
              ...prev.location,
              developers: [...prev.location.developers, ...fetchMoreResult.location.developers],
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
          orderBy: { field: 'SCORE', direction: 'DESC' },
        }}
        fetchPolicy="cache-and-network"
      >
        {({ loading, error, data, fetchMore }) => {
          if (loading && !loadMoreLoading && (data && !data.location)) {
            return <Loading />;
          }

          if (error) {
            return <ErrorState />;
          }

          if (!data || !data.location) {
            return null;
          }

          if (data.location.developers.length === 0) {
            return <NoData text="Bu şehir için geliştirici bulunamadi." />;
          }

          return (
            <Fragment>
              <Helmet>
                <title>{`${data.location.name} İçin Meşhur Geliştiriciler`}</title>
              </Helmet>

              <ScrollOnBottom
                threshold={100}
                stopListening={stopScrollListening === true}
                onReach={() => {
                  this.getMore({ loading, data, error, fetchMore });
                }}
              >
                <List columns={2}>
                  {data.location.developers.map((developer, index) => (
                    <DeveloperCard
                      key={developer.username}
                      rank={index + 1}
                      name={developer.name}
                      username={developer.username}
                      profilePicture={developer.avatarUrl}
                      company={developer.company}
                      totalStarred={developer.totalStarred}
                      followers={developer.followers}
                      repositoriesCount={developer.stats.repositoriesCount}
                      location={developer.location}
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
