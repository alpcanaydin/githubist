// @flow

import { Query } from 'react-apollo';

import { type BasicLocation } from '../../types/location';

type Data = {
  location: BasicLocation,
};

type Variables = {
  slug: string,
};

class LocationQuery extends Query<Data, Variables> {}

export default LocationQuery;
