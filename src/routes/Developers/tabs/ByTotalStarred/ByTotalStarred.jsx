// @flow

import React from 'react';

import DeveloperList from '../DeveloperList';

const ByTotalStarred = () => (
  <DeveloperList
    title="Star&apos;lanma Sayısına Göre Geliştiriciler"
    orderBy={{ field: 'TOTAL_STARRED', direction: 'DESC' }}
  />
);

export default ByTotalStarred;
