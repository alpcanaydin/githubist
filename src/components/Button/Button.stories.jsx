// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
  .add('primary', () => (
    <Button type="button" primary>
      Primary Button
    </Button>
  ))
  .add('secondary', () => (
    <Button type="button" secondary>
      Secondary Button
    </Button>
  ))
  .add('small', () => (
    <Button type="button" primary small>
      Small Button
    </Button>
  ))
  .add('disabled primary', () => (
    <Button type="button" primary disabled>
      Primary Button
    </Button>
  ))
  .add('disabled secondary', () => (
    <Button type="button" secondary disabled>
      Secondary Button
    </Button>
  ));
