// @flow

import { type LocationOrderField } from '../enums/locationOrderField';

import { type Order } from './order';

export type BasicLocation = {
  name: string,
  slug: string,
  totalRepositories: number,
  totalDevelopers: number,
};

export type LocationOrder = Order<LocationOrderField>;
