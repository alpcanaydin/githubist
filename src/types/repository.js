// @flow

import { type RepositoryOrderField } from '../enums/repositoryOrderField';

import { type Order } from './order';

export type BasicRepository = {
  slug: string,
  description?: string,
  language: {
    name: string,
    slug: string,
  },
  stars: number,
  forks: number,
};

export type RepositoryOrder = Order<RepositoryOrderField>;
