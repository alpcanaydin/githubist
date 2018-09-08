// @flow

import { Query } from 'react-apollo';

type Data = {
  turkey: {
    totalLocations: number,
  },
};

class LocationsQuery extends Query<Data, {}> {}

export default LocationsQuery;
