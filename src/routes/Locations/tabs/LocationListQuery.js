// @flow

import { Query } from 'react-apollo';

import { type BasicLocation, type LocationOrder } from '../../../types/location';

export type Data = {
  locations: Array<BasicLocation>,
};

export type Variables = {
  limit: number,
  offset: number,
  orderBy: LocationOrder,
};

class LocationListQuery extends Query<Data, Variables> {}

export default LocationListQuery;
