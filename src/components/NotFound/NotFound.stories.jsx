// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import backgrounds from '@storybook/addon-backgrounds';

import NotFound from './NotFound';

storiesOf('NotFound', module)
  .addDecorator(backgrounds([{ name: 'dark', value: '#2d2e33', default: true }]))
  .add('default', () => (
    <div style={{ backgroundColor: '#fff' }}>
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    </div>
  ));
