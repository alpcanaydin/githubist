// @flow

import { Query } from 'react-apollo';

import { type BasicDeveloper } from '../../../../types/developer';

type Data = {
  developer: BasicDeveloper & {
    stats: {
      rank: number,
      locationRank: number,
      repositoriesCount: number,
    },
    totalStarred: number,
    githubCreatedAt: string,
    location: {
      name: string,
    },
    followers: number,
    following: number,
  },
};

type Variables = {
  username: string,
};

class GeneralInfoQuery extends Query<Data, Variables> {}

export default GeneralInfoQuery;
