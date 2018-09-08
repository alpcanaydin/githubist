// @flow

import { Query } from 'react-apollo';

import { type BasicLocation, type LocationOrder } from '../../../types/location';

type LanguageUsage = Array<{ language: { name: string, slug: string } }>;

export type Data = {
  locations: Array<BasicLocation & { languageUsage: LanguageUsage }>,
};

export type Variables = {
  limit: number,
  offset: number,
  orderBy: LocationOrder,
};

class LocationListQuery extends Query<Data, Variables> {}

export default LocationListQuery;
