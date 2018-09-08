// @flow

import React from 'react';

import DeveloperList from '../DeveloperList';

const ByScore = () => (
  <DeveloperList title="Sıralama" orderBy={{ field: 'SCORE', direction: 'DESC' }} />
);

export default ByScore;
