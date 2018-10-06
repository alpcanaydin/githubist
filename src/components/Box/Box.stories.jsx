// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from './Box';

storiesOf('Box', module).add('default', () => (
  <div style={{ backgroundColor: '#fff' }}>
    <Box>Example Content</Box>
  </div>
));
