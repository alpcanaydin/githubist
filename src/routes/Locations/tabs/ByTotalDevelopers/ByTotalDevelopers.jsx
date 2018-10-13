// @flow

import React from 'react';

import LocationList from '../LocationList';

const ByTotalDevelopers = () => (
  <LocationList
    title="Geliştirici Sayısına Göre Şehirler"
    orderBy={{ field: 'TOTAL_DEVELOPERS', direction: 'DESC' }}
  />
);

export default ByTotalDevelopers;
