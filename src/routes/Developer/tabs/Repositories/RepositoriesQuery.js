// @flow

import { Query } from 'react-apollo';

import { type BasicDeveloper } from '../../../../types/developer';
import { type BasicRepository, type RepositoryOrder } from '../../../../types/repository';

export type Data = {
  developer: BasicDeveloper & {
    repositories: Array<BasicRepository>,
  },
};

export type Variables = {
  username: string,
  limit: number,
  offset: number,
  orderBy: RepositoryOrder,
};

class RepositoriesQuery extends Query<Data, Variables> {}

export default RepositoriesQuery;
