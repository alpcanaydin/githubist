// @flow

import { Query } from 'react-apollo';

type Data = {
  turkey: {
    totalDevelopers: number,
  },
};

class DevelopersQuery extends Query<Data, {}> {}

export default DevelopersQuery;
