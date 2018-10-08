// @flow

import { Query } from 'react-apollo';

import { type BasicRepository } from '../../types/repository';

type Data = {
  repository: BasicRepository & {
    developer: {
      username: string,
      avatarUrl: string,
    },
    stats: {
      rank: number,
      languageRank: number,
    },
    githubUrl: string,
    githubCreatedAt: string,
  },
};

type Variables = {
  slug: string,
};

class RepositoryQuery extends Query<Data, Variables> {}

export default RepositoryQuery;
