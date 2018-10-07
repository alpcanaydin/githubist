// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import Highlight from './Highlight';

storiesOf('Highlight', module).add('default', () => (
  <Highlight subject="3,250" title="Geliştirici" />
));
