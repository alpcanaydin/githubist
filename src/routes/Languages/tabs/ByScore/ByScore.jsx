// @flow

import React from 'react';

import LanguageList from '../LanguageList';

const ByScore = () => (
  <LanguageList title="Sıralama" orderBy={{ field: 'SCORE', direction: 'DESC' }} />
);

export default ByScore;
