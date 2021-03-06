// @flow

import React from 'react';

import LanguageList from '../LanguageList';

const ByTotalRepositories = () => (
  <LanguageList
    title="Repo Sayısına Göre Diller"
    orderBy={{ field: 'TOTAL_REPOSITORIES', direction: 'DESC' }}
  />
);

export default ByTotalRepositories;
