// @flow

import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import RepoCard from './RepoCard';

it('renders correctly', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <RepoCard
        slug="alpcanaydin/github.ist"
        description="Github Türkiye istatistikleri 2019"
        language={{ name: 'JavaScript', slug: 'javascript' }}
        stars={200}
        forks={30}
      />
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly with rank', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <RepoCard
        rank={1}
        slug="alpcanaydin/github.ist"
        description="Github Türkiye istatistikleri 2019"
        language={{ name: 'JavaScript', slug: 'javascript' }}
        stars={200}
        forks={30}
      />
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly with github creation date', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <RepoCard
        slug="alpcanaydin/github.ist"
        description="Github Türkiye istatistikleri 2019"
        language={{ name: 'JavaScript', slug: 'javascript' }}
        stars={200}
        forks={30}
        githubCreatedAt="2014-03-24T13:12:26.000000Z"
      />
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly without description', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <RepoCard
        slug="alpcanaydin/github.ist"
        language={{ name: 'JavaScript', slug: 'javascript' }}
        stars={200}
        forks={30}
      />
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});
