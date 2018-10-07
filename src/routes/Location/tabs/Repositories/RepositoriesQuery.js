// @flow

import { Query } from 'react-apollo';

import { type BasicLocation } from '../../../../types/location';
import { type BasicRepository, type RepositoryOrder } from '../../../../types/repository';

export type Data = {
  location: BasicLocation & {
    repositories: Array<BasicRepository>,
  },
};

export type Variables = {
  slug: string,
  limit: number,
  offset: number,
  orderBy: RepositoryOrder,
};

class RepositoriesQuery extends Query<Data, Variables> {}

export default RepositoriesQuery;
