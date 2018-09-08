// @flow

import { Query } from 'react-apollo';

import { type BasicDeveloper } from '../../types/developer';
import { type BasicLanguage } from '../../types/language';
import { type BasicLocation } from '../../types/location';
import { type BasicRepository } from '../../types/repository';

type Data = {
  turkey: {
    totalDevelopers: number,
    totalRepositories: number,
  },
  top8: Array<BasicDeveloper & { company?: string }>,
  locations: Array<BasicLocation & { score: number }>,
  languages: Array<BasicLanguage>,
  firstExplorers: Array<BasicDeveloper & { githubCreatedAt?: string }>,
  repositories: Array<BasicRepository>,
};

type Variables = {
  developersLimit: number,
  locationsLimit: number,
  languagesLimit: number,
  explorersLimit: number,
  repositoriesLimit: number,
};

class HomepageQuery extends Query<Data, Variables> {}

export default HomepageQuery;
