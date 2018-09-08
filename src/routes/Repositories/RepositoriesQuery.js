// @flow

import { Query } from 'react-apollo';

type Data = {
  turkey: {
    totalRepositories: number,
  },
};

class RepositoriesQuery extends Query<Data, {}> {}

export default RepositoriesQuery;
