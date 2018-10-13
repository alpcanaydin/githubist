// @flow

import React from 'react';

import LocationList from '../LocationList';

const ByScore = () => (
  <LocationList title="Şehir Sıralaması" orderBy={{ field: 'SCORE', direction: 'DESC' }} />
);

export default ByScore;
