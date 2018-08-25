// @flow

import { Query } from 'react-apollo';

type Data = {
  turkey: {
    totalDevelopers: number,
    totalLanguages: number,
    totalLocations: number,
    totalRepositories: number,
  },
};

class HomepageQuery extends Query<Data, {}> {}

export default HomepageQuery;
