// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';

import PageHeading from './PageHeading';

storiesOf('PageHeading', module)
  .addDecorator(backgrounds([{ name: 'dark', value: '#2d2e33', default: true }]))
  .add('default', () => (
    <div style={{ backgroundColor: '#fff' }}>
      <PageHeading title="Repos" subtitle="Lorem ipsum dolar sit amet." />
    </div>
  ))
  .add('without subtitle', () => (
    <div style={{ backgroundColor: '#fff' }}>
      <PageHeading title="Repos" />
    </div>
  ));
