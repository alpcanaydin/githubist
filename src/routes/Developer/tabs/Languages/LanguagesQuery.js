// @flow

import { Query } from 'react-apollo';

import { type BasicLanguage } from '../../../../types/language';
import { type BasicDeveloper } from '../../../../types/developer';

type LanguageUsage = {
  language: BasicLanguage,
  repositoriesCount: number,
};

export type Data = {
  developer: BasicDeveloper & {
    languageUsage: Array<LanguageUsage>,
  },
};

export type Variables = {
  username: string,
  limit: number,
  offset: number,
};

class LanguagesQuery extends Query<Data, Variables> {}

export default LanguagesQuery;
