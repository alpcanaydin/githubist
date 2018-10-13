// @flow

import React from 'react';

import DeveloperList from '../DeveloperList';

const ByFollowers = () => (
  <DeveloperList
    title="Takipçi Sayısına Göre Geliştiriciler"
    orderBy={{ field: 'FOLLOWERS', direction: 'DESC' }}
  />
);

export default ByFollowers;
