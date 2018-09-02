// @flow

import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Link } from 'react-router-dom';

import Footer from './Footer';

import { Logo } from '..';

it('has the Logo component', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  );

  expect(wrapper.find(Logo).exists()).toBe(true);
});

it('has links to statistics', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
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

it('has links to data files', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  );

  expect(
    wrapper.containsAllMatchingElements([
      <a href={process.env.GRAPHIQL_URL}>GraphiQL</a>,
      <a href={process.env.SQL_URL}>SQL Dosyası</a>,
      <a href={process.env.JSONS_URL}>JSON Dosyaları</a>,
    ]),
  ).toBe(true);
});

it('has links to github urls', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  );

  expect(
    wrapper.containsAllMatchingElements([
      <a href={process.env.GITHUB_WEB_URL}>Web</a>,
      <a href={process.env.GITHUB_API_URL}>API</a>,
      <a href={process.env.GITHUB_FETCHER_URL}>Fetcher</a>,
    ]),
  ).toBe(true);
});
