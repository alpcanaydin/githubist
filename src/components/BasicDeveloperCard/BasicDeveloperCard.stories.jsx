// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import BasicDeveloperCard from './BasicDeveloperCard';

storiesOf('BasicDeveloperCard', module)
  .add('default', () => (
    <MemoryRouter>
      <BasicDeveloperCard
        profilePicture="https://via.placeholder.com/150"
        name="Alpcan Aydın"
        username="alpcanaydin"
        info="@Atolye15"
      />
    </MemoryRouter>
  ))
  .add('with long info', () => (
    <MemoryRouter>
      <div style={{ width: '250px' }}>
        <BasicDeveloperCard
          profilePicture="https://via.placeholder.com/150"
          name="Alpcan Aydın"
          username="alpcanaydin"
          info="This is a very long info text that needs to be truncated"
        />
      </div>
    </MemoryRouter>
  ))
  .add('without info', () => (
    <MemoryRouter>
      <BasicDeveloperCard
        profilePicture="https://via.placeholder.com/150"
        name="Alpcan Aydın"
        username="alpcanaydin"
      />
    </MemoryRouter>
  ));
