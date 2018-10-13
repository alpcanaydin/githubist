// @flow

import React from 'react';

import LanguageList from '../LanguageList';

const ByScore = () => (
  <LanguageList title="Dil Sıralaması" orderBy={{ field: 'SCORE', direction: 'DESC' }} />
);

export default ByScore;
