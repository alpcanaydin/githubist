// @flow

import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import DeveloperCard from './DeveloperCard';

it('renders correctly', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <DeveloperCard
        name="Alpcan Aydın"
        username="alpcanaydin"
        profilePicture="https://avatars2.githubusercontent.com/u/1801024?v=4"
        company="@Atolye15"
        totalStarred={612}
        followers={404}
        repositoriesCount={23}
        location={{ name: 'İzmir', slug: 'izmir' }}
      />
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly with rank', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <DeveloperCard
        rank={1}
        name="Alpcan Aydın"
        username="alpcanaydin"
        profilePicture="https://avatars2.githubusercontent.com/u/1801024?v=4"
        company="@Atolye15"
        totalStarred={612}
        followers={404}
        repositoriesCount={23}
        location={{ name: 'İzmir', slug: 'izmir' }}
      />
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly with github creation date', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <DeveloperCard
        name="Alpcan Aydın"
        username="alpcanaydin"
        profilePicture="https://avatars2.githubusercontent.com/u/1801024?v=4"
        company="@Atolye15"
        totalStarred={612}
        followers={404}
        repositoriesCount={23}
        location={{ name: 'İzmir', slug: 'izmir' }}
        githubCreatedAt="2012-05-31T22:02:23.000000Z"
      />
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly without company', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <DeveloperCard
        name="Alpcan Aydın"
        username="alpcanaydin"
        profilePicture="https://avatars2.githubusercontent.com/u/1801024?v=4"
        totalStarred={612}
        followers={404}
        repositoriesCount={23}
        location={{ name: 'İzmir', slug: 'izmir' }}
      />
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly with custom repo text', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <DeveloperCard
        name="Alpcan Aydın"
        username="alpcanaydin"
        profilePicture="https://avatars2.githubusercontent.com/u/1801024?v=4"
        totalStarred={612}
        followers={404}
        repositoriesCount={23}
        repoText="Java Reposu"
        location={{ name: 'İzmir', slug: 'izmir' }}
      />
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});
