// @flow

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
