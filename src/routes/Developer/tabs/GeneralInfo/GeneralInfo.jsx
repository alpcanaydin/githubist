// @flow

import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
import { withRouter, type Match } from 'react-router-dom';

import { ErrorState, Loading, Highlight, List } from '../../../../components';

import toDateString from '../../../../utils/toDateString';

import GeneralInfoQuery from './GeneralInfoQuery';
import query from './GeneralInfo.graphql';

type Props = {
  match: Match,
};

const GeneralInfo = ({ match }: Props) => (
  <GeneralInfoQuery query={query} variables={{ username: match.params.username || '' }}>
    {({ loading, error, data }) => {
      if (loading) {
        return <Loading />;
      }

      if (error || !data || !data.developer) {
        return <ErrorState />;
      }

      return (
        <Fragment>
          <Helmet>
            <title>{`${data.developer.name || data.developer.username} İçin Genel Bilgiler`}</title>
          </Helmet>

          <List columns={2}>
            <Highlight
              subject={data.developer.stats.rank.toLocaleString()}
              title="Github.ist Sıralaması"
            />
            <Highlight
              subject={data.developer.stats.locationRank.toLocaleString()}
              title="Şehir Sıralaması"
            />
            <Highlight
              subject={data.developer.totalStarred.toLocaleString()}
              title="Toplam Star&apos;lanma"
            />
            <Highlight
              subject={data.developer.stats.repositoriesCount.toLocaleString()}
              title="Repo"
            />
            <Highlight subject={data.developer.followers.toLocaleString()} title="Takipçi" />
            <Highlight subject={data.developer.following.toLocaleString()} title="Takip Edilen" />
            <Highlight subject={data.developer.location.name} title="Şehir" />
            <Highlight
              subject={toDateString(data.developer.githubCreatedAt)}
              title="Kayıt Tarihi"
            />
          </List>
        </Fragment>
      );
    }}
  </GeneralInfoQuery>
);

export default withRouter(GeneralInfo);
