// @flow

import { type OrderDirection } from '../enums/orderDirection';

export type Order<T> = {
  field: T,
  direction: OrderDirection,
};
