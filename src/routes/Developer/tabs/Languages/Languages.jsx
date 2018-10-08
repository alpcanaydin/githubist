// @flow

import React, { Fragment, PureComponent } from 'react';
import Helmet from 'react-helmet';
import { withRouter, type Match } from 'react-router-dom';
import { type QueryRenderProps } from 'react-apollo';

import LanguagesQuery, { type Data, type Variables } from './LanguagesQuery';
import query from './Languages.graphql';

import { ErrorState, Loading, List, LanguageCard, ScrollOnBottom } from '../../../../components';

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

    if (error || !data || !data.developer) {
      this.setState({ stopScrollListening: true });
      return;
    }

    this.setState({ loadMoreLoading: true }, () => {
      fetchMore({
        variables: {
          offset: data.developer.languageUsage.length,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return prev;
          }

          if (fetchMoreResult.developer.languageUsage.length === 0) {
            this.setState({ stopScrollListening: true, loadMoreLoading: false }, () => prev);
          }

          this.setState({ loadMoreLoading: false });

          return {
            ...prev,
            developer: {
              ...prev.developer,
              languageUsage: [
                ...prev.developer.languageUsage,
                ...fetchMoreResult.developer.languageUsage,
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
          username: match.params.username || '',
          limit: 30,
          offset: 0,
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

          return (
            <Fragment>
              <Helmet>
                <title>{`${data.developer.name} İçin Dil Kullanımı`}</title>
              </Helmet>

              <ScrollOnBottom
                threshold={100}
                stopListening={stopScrollListening === true}
                onReach={() => {
                  this.getMore({ loading, data, error, fetchMore });
                }}
              >
                <List columns={3}>
                  {data.developer.languageUsage.map((languageUsage, index) => (
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
