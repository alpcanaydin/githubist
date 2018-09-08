// @flow

import { type DeveloperOrderField } from '../enums/developerOrderField';

import { type Order } from './order';

export type BasicDeveloper = {
  name: string,
  username: string,
  avatarUrl: string,
};

export type DeveloperOrder = Order<DeveloperOrderField>;
