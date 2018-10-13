// @flow

import React from 'react';

import LanguageList from '../LanguageList';

const ByTotalDevelopers = () => (
  <LanguageList
    title="Geliştirici Sayısına Göre Diller"
    orderBy={{ field: 'TOTAL_DEVELOPERS', direction: 'DESC' }}
  />
);

export default ByTotalDevelopers;
