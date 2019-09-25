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

      if (error || !data || !data.location) {
        return <ErrorState />;
      }

      return (
        <Fragment>
          <Helmet>
            <title>{`${data.location.name} İçin Genel Bilgiler`}</title>
          </Helmet>

          <List columns={2}>
            <Highlight
              subject={data.location.stats.rank.toLocaleString()}
              title="GitHub.ist Sıralaması"
            />
            <Highlight
              subject={data.location.totalDevelopers.toLocaleString()}
              title="Geliştirici"
            />
            <Highlight subject={data.location.totalRepositories.toLocaleString()} title="Repo" />
            <Highlight
              subject={
                data.location.languageUsage.length > 0
                  ? data.location.languageUsage[0].language.name
                  : 'Yok'
              }
              title="En Sevilen Dil"
            />
          </List>
        </Fragment>
      );
    }}
  </GeneralInfoQuery>
);

export default withRouter(GeneralInfo);
