// @flow

import { Query } from 'react-apollo';

import { type BasicRepository, type RepositoryOrder } from '../../../types/repository';

export type Data = {
  repositories: Array<BasicRepository & { githubCreatedAt?: string }>,
};

export type Variables = {
  limit: number,
  offset: number,
  orderBy: RepositoryOrder,
  includeDate: boolean,
};

class RepositoryListQuery extends Query<Data, Variables> {}

export default RepositoryListQuery;
