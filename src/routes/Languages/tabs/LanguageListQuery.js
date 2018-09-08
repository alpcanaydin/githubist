// @flow

import { Query } from 'react-apollo';

import { type BasicLanguage, type LanguageOrder } from '../../../types/language';

export type Data = {
  languages: Array<BasicLanguage>,
};

export type Variables = {
  limit: number,
  offset: number,
  orderBy: LanguageOrder,
};

class LanguageListQuery extends Query<Data, Variables> {}

export default LanguageListQuery;
