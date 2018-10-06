// @flow

import { Query } from 'react-apollo';

import { type BasicLanguage } from '../../../../types/language';
import { type BasicDeveloper } from '../../../../types/developer';

type Developer = BasicDeveloper & {
  totalStarred: number,
  followers: number,
  company?: string,
  location: {
    name: string,
    slug: string,
  },
};

type DeveloperUsage = {
  developer: Developer,
  repositoriesCount: number,
};

export type Data = {
  language: BasicLanguage & {
    developerUsage: Array<DeveloperUsage>,
  },
};

export type Variables = {
  slug: string,
  limit: number,
  offset: number,
};

class DevelopersQuery extends Query<Data, Variables> {}

export default DevelopersQuery;
