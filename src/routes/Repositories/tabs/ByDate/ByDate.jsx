// @flow

import React from 'react';

import RepositoryList from '../RepositoryList';

const ByDate = () => (
  <RepositoryList
    title="Oluşturulma Tarihine Göre Repolar"
    orderBy={{ field: 'GITHUB_CREATED_AT', direction: 'ASC' }}
    includeDate
  />
);

export default ByDate;
