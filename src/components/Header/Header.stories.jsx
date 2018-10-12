// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider } from 'react-apollo/test-utils';

import Header from './Header';

storiesOf('Header', module)
  .addDecorator(backgrounds([{ name: 'dark', value: '#2d2e33', default: true }]))
  .add('default', () => (
    <div style={{ backgroundColor: '#fff' }}>
      <MockedProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </MockedProvider>
    </div>
  ));
