// @flow

import { Query } from 'react-apollo';

import { type BasicLocation } from '../../../../types/location';

type Data = {
  location: BasicLocation & {
    totalStars: number,
    stats: {
      rank: number,
    },
    languageUsage: Array<{ language: { name: string } }>,
  },
};

type Variables = {
  slug: string,
};

class GeneralInfoQuery extends Query<Data, Variables> {}

export default GeneralInfoQuery;
