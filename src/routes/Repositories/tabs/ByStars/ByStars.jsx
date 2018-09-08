// @flow

import React from 'react';

import RepositoryList from '../RepositoryList';

const ByStars = () => (
  <RepositoryList
    title="Star&apos;larına Göre Repolar"
    orderBy={{ field: 'STARS', direction: 'DESC' }}
  />
);

export default ByStars;
