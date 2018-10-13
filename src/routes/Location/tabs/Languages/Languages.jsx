// @flow

import React, { Fragment, PureComponent } from 'react';
import Helmet from 'react-helmet';
import { withRouter, type Match } from 'react-router-dom';
import { type QueryRenderProps } from 'react-apollo';

import LanguagesQuery, { type Data, type Variables } from './LanguagesQuery';
import query from './Languages.graphql';

import {
  ErrorState,
  Loading,
  NoData,
  List,
  LanguageCard,
  ScrollOnBottom,
} from '../../../../components';

type Props = {
  match: Match,
};

type State = {
  stopScrollListening: boolean,
  loadMoreLoading: boolean,
};

class Languages extends PureComponent<Props, State> {
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
          offset: data.location.languageUsage.length,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return prev;
          }

          if (fetchMoreResult.location.languageUsage.length === 0) {
            this.setState({ stopScrollListening: true, loadMoreLoading: false }, () => prev);
          }

          this.setState({ loadMoreLoading: false });

          return {
            ...prev,
            location: {
              ...prev.location,
              languageUsage: [
                ...prev.location.languageUsage,
                ...fetchMoreResult.location.languageUsage,
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
      <LanguagesQuery
        query={query}
        variables={{
          slug: match.params.slug || '',
          limit: 30,
          offset: 0,
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

          if (data.location.languageUsage.length === 0) {
            return <NoData text="Bu şehir için dil kullanımı verisi bulunamadı." />;
          }

          return (
            <Fragment>
              <Helmet>
                <title>{`${data.location.name} İçin Dil Kullanımı`}</title>
              </Helmet>

              <ScrollOnBottom
                threshold={100}
                stopListening={stopScrollListening === true}
                onReach={() => {
                  this.getMore({ loading, data, error, fetchMore });
                }}
              >
                <List columns={3}>
                  {data.location.languageUsage.map((languageUsage, index) => (
                    <LanguageCard
                      key={languageUsage.language.slug}
                      rank={index + 1}
                      name={languageUsage.language.name}
                      slug={languageUsage.language.slug}
                      totalRepositories={languageUsage.repositoriesCount}
                    />
                  ))}
                </List>

                {loading && <Loading />}
              </ScrollOnBottom>
            </Fragment>
          );
        }}
      </LanguagesQuery>
    );
  }
}

export default withRouter(Languages);
