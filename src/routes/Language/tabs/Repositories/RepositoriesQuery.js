// @flow

import { Query } from 'react-apollo';

import { type BasicLanguage } from '../../../../types/language';
import { type BasicRepository, type RepositoryOrder } from '../../../../types/repository';

export type Data = {
  language: BasicLanguage & {
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
