// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import SectionTitle from './SectionTitle';

storiesOf('SectionTitle', module)
  .add('default', () => <SectionTitle subject="Standings">Top 5</SectionTitle>)
  .add('without subject', () => <SectionTitle>Top 5</SectionTitle>);
