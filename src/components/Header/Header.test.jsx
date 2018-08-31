// @flow

import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Link } from 'react-router-dom';

import Header from './Header';

import { Logo } from '..';

it('has the Logo component', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

  expect(wrapper.find(Logo).exists()).toBe(true);
});

it('has links to subroutes', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

  expect(
    wrapper.containsAllMatchingElements([
      <Link to="/developers">Geliştiriciler</Link>,
      <Link to="/cities">Şehirler</Link>,
      <Link to="/languages">Diller</Link>,
      <Link to="/repositories">Repolar</Link>,
    ]),
  ).toBe(true);
});
