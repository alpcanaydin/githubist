// @flow

import React from 'react';

import DeveloperList from '../DeveloperList';

const ByDate = () => (
  <DeveloperList
    title="İlk Keşfedenler"
    orderBy={{ field: 'GITHUB_CREATED_AT', direction: 'ASC' }}
    includeDate
  />
);

export default ByDate;
