// @flow

import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { withRouter, type Match } from 'react-router-dom';

import { ErrorState, Loading, Highlight, List } from '../../../../components';

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
            <Highlight
              subject={data.language.stats.rank.toLocaleString()}
              title="Github.ist Sıralaması"
            />
            <Highlight
              subject={data.language.stats.developersCountRank.toLocaleString()}
              title="Geliştirici Sayısı Sıralaması"
            />
            <Highlight
              subject={data.language.stats.repositoriesCountRank.toLocaleString()}
              title="Repo Sayısı Sıralaması"
            />
            <Highlight
              subject={data.language.totalDevelopers.toLocaleString()}
              title="Geliştirici"
            />
            <Highlight subject={data.language.totalRepositories.toLocaleString()} title="Repo" />
            <Highlight subject={data.language.totalStars.toLocaleString()} title="Star" />
          </List>
        </Fragment>
      );
    }}
  </GeneralInfoQuery>
);

export default withRouter(GeneralInfo);
