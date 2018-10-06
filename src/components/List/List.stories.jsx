// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import List from './List';

storiesOf('List', module).add('default', () => (
  <List columns={3}>
    <div>Column 1</div>
    <div>Column 2</div>
    <div>Column 3</div>
  </List>
));
