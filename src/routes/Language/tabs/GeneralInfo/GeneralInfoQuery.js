// @flow

import { Query } from 'react-apollo';

import { type BasicLanguage } from '../../../../types/language';

type Data = {
  language: BasicLanguage & {
    totalStars: number,
    stats: {
      rank: number,
      developersCountRank: number,
      repositoriesCountRank: number,
    },
  },
};

type Variables = {
  slug: string,
};

class GeneralInfoQuery extends Query<Data, Variables> {}

export default GeneralInfoQuery;
