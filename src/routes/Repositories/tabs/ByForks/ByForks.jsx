// @flow

import React from 'react';

import RepositoryList from '../RepositoryList';

const ByForks = () => (
  <RepositoryList
    title="Fork&apos;larına Göre Repolar"
    orderBy={{ field: 'FORKS', direction: 'DESC' }}
  />
);

export default ByForks;
