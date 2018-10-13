// @flow

import React from 'react';

import DeveloperList from '../DeveloperList';

const ByDate = () => (
  <DeveloperList
    title="İlk Keşfeden Geliştiriciler"
    orderBy={{ field: 'GITHUB_CREATED_AT', direction: 'ASC' }}
    includeDate
  />
);

export default ByDate;
