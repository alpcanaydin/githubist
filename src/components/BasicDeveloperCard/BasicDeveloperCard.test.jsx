// @flow

import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import BasicDeveloperCard from './BasicDeveloperCard';

it('renders correctly', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <BasicDeveloperCard
        profilePicture="https://via.placeholder.com/150"
        name="Alpcan Aydın"
        username="alpcanaydin"
        info="@Atolye15"
      />
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly without info', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <BasicDeveloperCard
        profilePicture="https://via.placeholder.com/150"
        name="Alpcan Aydın"
        username="alpcanaydin"
      />
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});
