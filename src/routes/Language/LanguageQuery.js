// @flow

import { Query } from 'react-apollo';

import { type BasicLanguage } from '../../types/language';

type Data = {
  language: BasicLanguage,
};

type Variables = {
  slug: string,
};

class LanguageQuery extends Query<Data, Variables> {}

export default LanguageQuery;
