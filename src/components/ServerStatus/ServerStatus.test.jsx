// @flow

import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import ServerStatus from './ServerStatus';

it('renders correctly', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <ServerStatus code={404}>Not Found</ServerStatus>
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});
