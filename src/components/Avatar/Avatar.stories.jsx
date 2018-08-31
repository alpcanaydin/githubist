// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import Avatar from './Avatar';

storiesOf('Avatar', module)
  .add('default', () => <Avatar url="https://via.placeholder.com/150" alt="Default image" />)
  .add('small', () => (
    <Avatar url="https://via.placeholder.com/150" alt="Default image" size="small" />
  ));
