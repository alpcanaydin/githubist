// @flow

import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Link } from 'react-router-dom';
import { MockedProvider } from 'react-apollo/test-utils';

import Header from './Header';

import Search from '../../containers/Search';

import { Logo } from '..';

it('has the Logo component', () => {
  const wrapper = mount(
    <MockedProvider>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </MockedProvider>,
  );

  expect(wrapper.find(Logo).exists()).toBe(true);
});

it('has the Search component', () => {
  const wrapper = mount(
    <MockedProvider>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </MockedProvider>,
  );

  expect(wrapper.find(Search).exists()).toBe(true);
});

it('has links to subroutes', () => {
  const wrapper = mount(
    <MockedProvider>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </MockedProvider>,
  );

  expect(
    wrapper.containsAllMatchingElements([
      <Link to="/developers">Geliştiriciler</Link>,
      <Link to="/locations">Şehirler</Link>,
      <Link to="/languages">Diller</Link>,
      <Link to="/repositories">Repolar</Link>,
    ]),
  ).toBe(true);
});
