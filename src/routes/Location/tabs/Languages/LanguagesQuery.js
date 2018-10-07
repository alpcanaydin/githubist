// @flow

import { Query } from 'react-apollo';

import { type BasicLanguage } from '../../../../types/language';
import { type BasicLocation } from '../../../../types/location';

type LanguageUsage = {
  language: BasicLanguage,
  repositoriesCount: number,
};

export type Data = {
  location: BasicLocation & {
    languageUsage: Array<LanguageUsage>,
  },
};

export type Variables = {
  slug: string,
  limit: number,
  offset: number,
};

class LanguagesQuery extends Query<Data, Variables> {}

export default LanguagesQuery;
