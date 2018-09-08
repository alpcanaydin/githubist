// @flow

import React from 'react';

import LocationList from '../LocationList';

const ByTotalRepositories = () => (
  <LocationList
    title="Repo Sayısına Göre"
    orderBy={{ field: 'TOTAL_REPOSITORIES', direction: 'DESC' }}
  />
);

export default ByTotalRepositories;
