// @flow

import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { withRouter, type Match } from 'react-router-dom';

import { Count, ErrorState, Loading, List } from '../../../../components';

import GeneralInfoQuery from './GeneralInfoQuery';
import query from './GeneralInfo.graphql';

type Props = {
  match: Match,
};

const GeneralInfo = ({ match }: Props) => (
  <GeneralInfoQuery query={query} variables={{ slug: match.params.slug || '' }}>
    {({ loading, error, data }) => {
      if (loading) {
        return <Loading />;
      }

      if (error || !data || !data.language) {
        return <ErrorState />;
      }

      return (
        <Fragment>
          <Helmet>
            <title>{`${data.language.name} İçin Genel Bilgiler`}</title>
          </Helmet>

          <List columns={3}>
            <Count count={data.language.stats.rank} title="Sıralama" />
            <Count count={data.language.stats.developersCountRank} title="Geliştirici Sıralaması" />
            <Count count={data.language.stats.repositoriesCountRank} title="Repo Sıralaması" />
            <Count count={data.language.totalDevelopers} title="Geliştirici" />
            <Count count={data.language.totalRepositories} title="Repo" />
            <Count count={data.language.totalStars} title="Star" />
          </List>
        </Fragment>
      );
    }}
  </GeneralInfoQuery>
);

export default withRouter(GeneralInfo);
