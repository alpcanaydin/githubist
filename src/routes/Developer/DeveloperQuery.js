// @flow

import { Query } from 'react-apollo';

import { type BasicDeveloper } from '../../types/developer';

type Data = {
  developer: BasicDeveloper & { bio?: string, githubUrl: string },
};

type Variables = {
  username: string,
};

class DeveloperQuery extends Query<Data, Variables> {}

export default DeveloperQuery;
