// @flow

import React, { Fragment, PureComponent } from 'react';
import Helmet from 'react-helmet';
import { type QueryRenderProps } from 'react-apollo';

import { type LanguageOrder } from '../../../types/language';

import LanguageListQuery, { type Data, type Variables } from './LanguageListQuery';
import query from './LanguageList.graphql';

import { ErrorState, Loading, LanguageCard, ScrollOnBottom } from '../../../components';

import styles from './LanguageList.scss';

type Props = {
  title: string,
  orderBy: LanguageOrder,
};

type State = {
  stopScrollListening: boolean,
  loadMoreLoading: boolean,
};

class LanguageList extends PureComponent<Props, State> {
  state = {
    stopScrollListening: false,
    loadMoreLoading: false,
  };

  getMore = ({ loading, error, data, fetchMore }: $Shape<QueryRenderProps<Data, Variables>>) => {
    if (loading) {
      return;
    }

    if (error || !data || !data.languages) {
      this.setState({ stopScrollListening: true });
      return;
    }

    this.setState({ loadMoreLoading: true }, () => {
      fetchMore({
        variables: {
          offset: data.languages.length,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return prev;
          }

          if (fetchMoreResult.languages.length === 0) {
            this.setState({ stopScrollListening: true, loadMoreLoading: false }, () => prev);
          }

          this.setState({ loadMoreLoading: false });

          return {
            ...prev,
            languages: [...prev.languages, ...fetchMoreResult.languages],
          };
        },
      });
    });
  };

  render() {
    const { title, orderBy } = this.props;
    const { stopScrollListening, loadMoreLoading } = this.state;

    return (
      <LanguageListQuery
        query={query}
        variables={{
          limit: 30,
          offset: 0,
          orderBy,
        }}
        fetchPolicy="cache-and-network"
      >
        {({ loading, error, data, fetchMore }) => {
          if (loading && !loadMoreLoading && (data && !data.languages)) {
            return <Loading />;
          }

          if (error) {
            return <ErrorState />;
          }

          if (!data || !data.languages) {
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
                <div className={styles.languages}>
                  {data.languages.map((language, index) => (
                    <LanguageCard
                      key={language.slug}
                      rank={index + 1}
                      name={language.name}
                      slug={language.slug}
                      totalRepositories={language.totalRepositories}
                      totalDevelopers={language.totalDevelopers}
                    />
                  ))}
                </div>

                {loading && <Loading />}
              </ScrollOnBottom>
            </Fragment>
          );
        }}
      </LanguageListQuery>
    );
  }
}

export default LanguageList;
