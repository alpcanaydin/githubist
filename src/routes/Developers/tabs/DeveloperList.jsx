// @flow

import React, { Fragment, PureComponent } from 'react';
import Helmet from 'react-helmet';
import { type QueryRenderProps } from 'react-apollo';

import { type DeveloperOrder } from '../../../types/developer';

import DeveloperListQuery, { type Data, type Variables } from './DeveloperListQuery';
import query from './DeveloperList.graphql';

import { ErrorState, Loading, List, DeveloperCard, ScrollOnBottom } from '../../../components';

type Props = {
  title: string,
  orderBy: DeveloperOrder,
  includeDate?: boolean,
};

type State = {
  stopScrollListening: boolean,
  loadMoreLoading: boolean,
};

class DeveloperList extends PureComponent<Props, State> {
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

    if (error || !data || !data.developers) {
      this.setState({ stopScrollListening: true });
      return;
    }

    this.setState({ loadMoreLoading: true }, () => {
      fetchMore({
        variables: {
          offset: data.developers.length,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return prev;
          }

          if (fetchMoreResult.developers.length === 0) {
            this.setState({ stopScrollListening: true, loadMoreLoading: false }, () => prev);
          }

          this.setState({ loadMoreLoading: false });

          return {
            ...prev,
            developers: [...prev.developers, ...fetchMoreResult.developers],
          };
        },
      });
    });
  };

  render() {
    const { title, orderBy, includeDate = false } = this.props;
    const { stopScrollListening, loadMoreLoading } = this.state;

    return (
      <DeveloperListQuery
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
          if (loading && !loadMoreLoading && (data && !data.developers)) {
            return <Loading />;
          }

          if (error) {
            return <ErrorState />;
          }

          if (!data || !data.developers) {
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
                <List columns={2}>
                  {data.developers.map((developer, index) => (
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
                      githubCreatedAt={developer.githubCreatedAt}
                    />
                  ))}
                </List>

                {loading && <Loading />}
              </ScrollOnBottom>
            </Fragment>
          );
        }}
      </DeveloperListQuery>
    );
  }
}

export default DeveloperList;
