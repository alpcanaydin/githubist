// @flow

import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import LocationCard from './LocationCard';

it('renders correctly', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <LocationCard
        name="İzmir"
        slug="izmir"
        totalRepositories={2150}
        totalDevelopers={768}
        language={{ name: 'JavaScript', slug: 'javascript' }}
      />
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly with rank', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <LocationCard
        rank={1}
        name="İzmir"
        slug="izmir"
        totalRepositories={2150}
        totalDevelopers={768}
        language={{ name: 'JavaScript', slug: 'javascript' }}
      />
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly without language', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <LocationCard
        rank={1}
        name="İzmir"
        slug="izmir"
        totalRepositories={2150}
        totalDevelopers={768}
      />
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly without developers count', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <LocationCard
        rank={1}
        name="İzmir"
        slug="izmir"
        totalRepositories={2150}
        language={{ name: 'JavaScript', slug: 'javascript' }}
      />
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});
