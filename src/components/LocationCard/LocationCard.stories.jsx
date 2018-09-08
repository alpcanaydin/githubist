// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import { MemoryRouter } from 'react-router-dom';

import LocationCard from './LocationCard';

storiesOf('LocationCard', module)
  .addDecorator(backgrounds([{ name: 'light', value: '#fcfafa', default: true }]))
  .add('default', () => (
    <MemoryRouter>
      <div style={{ width: '320px', margin: '16px' }}>
        <LocationCard name="İzmir" slug="izmir" totalRepositories={2150} totalDevelopers={768} />
      </div>
    </MemoryRouter>
  ))
  .add('with rank', () => (
    <MemoryRouter>
      <div style={{ width: '320px', margin: '16px' }}>
        <LocationCard
          rank={1}
          name="İzmir"
          slug="izmir"
          totalRepositories={2150}
          totalDevelopers={768}
        />
      </div>
    </MemoryRouter>
  ));
