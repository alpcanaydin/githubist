// @flow

import { type LanguageOrderField } from '../enums/languageOrderField';

import { type Order } from './order';

export type BasicLanguage = {
  name: string,
  slug: string,
  totalRepositories: number,
  totalDevelopers: number,
};

export type LanguageOrder = Order<LanguageOrderField>;
