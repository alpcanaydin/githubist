// @flow

import React, { Fragment, PureComponent } from 'react';
import Helmet from 'react-helmet';
import { type QueryRenderProps } from 'react-apollo';

import { type LocationOrder } from '../../../types/location';

import LocationListQuery, { type Data, type Variables } from './LocationListQuery';
import query from './LocationList.graphql';

import { ErrorState, Loading, LocationCard, ScrollOnBottom } from '../../../components';

import styles from './LocationList.scss';

type Props = {
  title: string,
  orderBy: LocationOrder,
};

type State = {
  stopScrollListening: boolean,
};

class LocationList extends PureComponent<Props, State> {
  state = {
    stopScrollListening: false,
  };

  getMore = ({ loading, error, data, fetchMore }: $Shape<QueryRenderProps<Data, Variables>>) => {
    if (loading) {
      return;
    }

    if (error || !data || !data.locations) {
      this.setState({ stopScrollListening: true });
      return;
    }

    fetchMore({
      variables: {
        offset: data.locations.length,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) {
          return prev;
        }

        if (fetchMoreResult.locations.length === 0) {
          this.setState({ stopScrollListening: true }, () => prev);
        }

        return {
          ...prev,
          locations: [...prev.locations, ...fetchMoreResult.locations],
        };
      },
    });
  };

  render() {
    const { title, orderBy } = this.props;
    const { stopScrollListening } = this.state;

    return (
      <LocationListQuery
        query={query}
        variables={{
          limit: 30,
          offset: 0,
          orderBy,
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

          if (!data || !data.locations) {
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
                <div className={styles.locations}>
                  {data.locations.map((location, index) => (
                    <LocationCard
                      key={location.slug}
                      rank={index + 1}
                      name={location.name}
                      slug={location.slug}
                      totalRepositories={location.totalRepositories}
                      totalDevelopers={location.totalDevelopers}
                    />
                  ))}
                </div>

                {loading && <Loading />}
              </ScrollOnBottom>
            </Fragment>
          );
        }}
      </LocationListQuery>
    );
  }
}

export default LocationList;
