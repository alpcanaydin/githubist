// @flow

import { Query } from 'react-apollo';

import { type BasicLanguage } from '../../../../types/language';
import { type BasicLocation } from '../../../../types/location';

type LocationUsage = {
  location: BasicLocation,
  repositoriesCount: number,
};

export type Data = {
  language: BasicLanguage & {
    locationUsage: Array<LocationUsage>,
  },
};

export type Variables = {
  slug: string,
  limit: number,
  offset: number,
};

class LocationsQuery extends Query<Data, Variables> {}

export default LocationsQuery;
