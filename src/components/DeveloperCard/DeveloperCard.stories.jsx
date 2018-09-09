// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import { MemoryRouter } from 'react-router-dom';

import DeveloperCard from './DeveloperCard';

storiesOf('DeveloperCard', module)
  .addDecorator(backgrounds([{ name: 'light', value: '#fcfafa', default: true }]))
  .add('default', () => (
    <MemoryRouter>
      <div style={{ width: '500px', margin: '16px' }}>
        <DeveloperCard
          name="Alpcan Aydın"
          username="alpcanaydin"
          profilePicture="https://avatars2.githubusercontent.com/u/1801024?v=4"
          company="@Atolye15"
          followers={404}
          totalStarred={612}
          repositoriesCount={23}
          location={{ name: 'İzmir', slug: 'izmir' }}
        />
      </div>
    </MemoryRouter>
  ))
  .add('with rank', () => (
    <MemoryRouter>
      <div style={{ width: '500px', margin: '16px' }}>
        <DeveloperCard
          rank={1}
          name="Alpcan Aydın"
          username="alpcanaydin"
          profilePicture="https://avatars2.githubusercontent.com/u/1801024?v=4"
          company="@Atolye15"
          followers={404}
          totalStarred={612}
          repositoriesCount={23}
          location={{ name: 'İzmir', slug: 'izmir' }}
        />
      </div>
    </MemoryRouter>
  ))
  .add('with github creation date', () => (
    <MemoryRouter>
      <div style={{ width: '500px', margin: '16px' }}>
        <DeveloperCard
          name="Alpcan Aydın"
          username="alpcanaydin"
          profilePicture="https://avatars2.githubusercontent.com/u/1801024?v=4"
          company="@Atolye15"
          followers={404}
          totalStarred={612}
          repositoriesCount={23}
          location={{ name: 'İzmir', slug: 'izmir' }}
          githubCreatedAt="2012-05-31T22:02:23.000000Z"
        />
      </div>
    </MemoryRouter>
  ))
  .add('without company', () => (
    <MemoryRouter>
      <div style={{ width: '500px', margin: '16px' }}>
        <DeveloperCard
          name="Alpcan Aydın"
          username="alpcanaydin"
          profilePicture="https://avatars2.githubusercontent.com/u/1801024?v=4"
          totalStarred={612}
          followers={404}
          repositoriesCount={23}
          location={{ name: 'İzmir', slug: 'izmir' }}
        />
      </div>
    </MemoryRouter>
  ));
