// @flow

import React, { Fragment, PureComponent } from 'react';
import Helmet from 'react-helmet';
import { withRouter, type Match } from 'react-router-dom';
import { type QueryRenderProps } from 'react-apollo';

import LocationsQuery, { type Data, type Variables } from './LocationsQuery';
import query from './Locations.graphql';

import { ErrorState, Loading, LocationCard, ScrollOnBottom } from '../../../../components';

import styles from './Locations.scss';

type Props = {
  match: Match,
};

type State = {
  stopScrollListening: boolean,
  loadMoreLoading: boolean,
};

class Locations extends PureComponent<Props, State> {
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
          offset: data.language.locationUsage.length,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return prev;
          }

          if (fetchMoreResult.language.locationUsage.length === 0) {
            this.setState({ stopScrollListening: true, loadMoreLoading: false }, () => prev);
          }

          this.setState({ loadMoreLoading: false });

          return {
            ...prev,
            language: {
              ...prev.language,
              locationUsage: [
                ...prev.language.locationUsage,
                ...fetchMoreResult.language.locationUsage,
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
      <LocationsQuery
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
                <title>{`${data.language.name} İçin Şehir Dağılımı`}</title>
              </Helmet>

              <ScrollOnBottom
                threshold={100}
                stopListening={stopScrollListening === true}
                onReach={() => {
                  this.getMore({ loading, data, error, fetchMore });
                }}
              >
                <div className={styles.locations}>
                  {data.language.locationUsage.map((locationUsage, index) => (
                    <LocationCard
                      key={locationUsage.location.slug}
                      rank={index + 1}
                      name={locationUsage.location.name}
                      slug={locationUsage.location.slug}
                      totalRepositories={locationUsage.repositoriesCount}
                      totalDevelopers={locationUsage.location.totalDevelopers}
                    />
                  ))}
                </div>

                {loading && <Loading />}
              </ScrollOnBottom>
            </Fragment>
          );
        }}
      </LocationsQuery>
    );
  }
}

export default withRouter(Locations);
