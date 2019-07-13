// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import { MemoryRouter } from 'react-router-dom';

import RepoCard from './RepoCard';

storiesOf('RepoCard', module)
  .addDecorator(backgrounds([{ name: 'light', value: '#fcfafa', default: true }]))
  .add('default', () => (
    <MemoryRouter>
      <div style={{ width: '600px', margin: '16px' }}>
        <RepoCard
          slug="alpcanaydin/github.ist"
          description="Github Türkiye istatistikleri 2019"
          language={{ name: 'JavaScript', slug: 'javascript' }}
          stars={200}
          forks={30}
        />
      </div>
    </MemoryRouter>
  ))
  .add('with rank', () => (
    <MemoryRouter>
      <div style={{ width: '600px', margin: '16px' }}>
        <RepoCard
          rank={1}
          slug="alpcanaydin/github.ist"
          description="Github Türkiye istatistikleri 2019"
          language={{ name: 'JavaScript', slug: 'javascript' }}
          stars={200}
          forks={30}
        />
      </div>
    </MemoryRouter>
  ))
  .add('with github creation date', () => (
    <MemoryRouter>
      <div style={{ width: '600px', margin: '16px' }}>
        <RepoCard
          slug="alpcanaydin/github.ist"
          description="Github Türkiye istatistikleri 2019"
          language={{ name: 'JavaScript', slug: 'javascript' }}
          stars={200}
          forks={30}
          githubCreatedAt="2014-03-24T13:12:26.000000Z"
        />
      </div>
    </MemoryRouter>
  ))
  .add('without description', () => (
    <MemoryRouter>
      <div style={{ width: '600px', margin: '16px' }}>
        <RepoCard
          slug="alpcanaydin/github.ist"
          language={{ name: 'JavaScript', slug: 'javascript' }}
          stars={200}
          forks={30}
        />
      </div>
    </MemoryRouter>
  ));
