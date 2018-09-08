// @flow

import { Query } from 'react-apollo';

type Data = {
  turkey: {
    totalLanguages: number,
  },
};

class LanguagesQuery extends Query<Data, {}> {}

export default LanguagesQuery;
