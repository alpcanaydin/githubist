// @flow

import { Query } from 'react-apollo';

import { type BasicLocation } from '../../../../types/location';
import { type BasicDeveloper, type DeveloperOrder } from '../../../../types/developer';

type Developer = BasicDeveloper & {
  totalStarred: number,
  followers: number,
  company?: string,
  location: {
    name: string,
    slug: string,
  },
  stats: {
    repositoriesCount: number,
  },
};

export type Data = {
  location: BasicLocation & {
    developers: Array<Developer>,
  },
};

export type Variables = {
  slug: string,
  limit: number,
  offset: number,
  orderBy: DeveloperOrder,
};

class DevelopersQuery extends Query<Data, Variables> {}

export default DevelopersQuery;
