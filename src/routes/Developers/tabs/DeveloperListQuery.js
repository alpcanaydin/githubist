// @flow

import { Query } from 'react-apollo';

import { type BasicDeveloper, type DeveloperOrder } from '../../../types/developer';

type ExtraFields = {
  totalStarred: number,
  bio?: string,
  company?: string,
  followers: number,
  stats: {
    repositoriesCount: number,
  },
  githubCreatedAt?: string,
  location: {
    name: string,
    slug: string,
  },
};

export type Data = {
  developers: Array<BasicDeveloper & ExtraFields>,
};

export type Variables = {
  limit: number,
  offset: number,
  orderBy: DeveloperOrder,
  includeDate: boolean,
};

class DeveloperListQuery extends Query<Data, Variables> {}

export default DeveloperListQuery;
