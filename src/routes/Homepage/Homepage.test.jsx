// @flow

import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { MemoryRouter, Link } from 'react-router-dom';
import { mount } from 'enzyme';
import wait from 'waait';

import Homepage from './Homepage';
import query from './Homepage.graphql';

it('renders the counts', async () => {
  const turkeyMock = {
    request: { query },
    result: {
      data: {
        turkey: {
          totalDevelopers: 100,
          totalLanguages: 100,
          totalLocations: 100,
          totalRepositories: 100,
        },
      },
    },
  };

  const wrapper = mount(
    <MockedProvider mocks={[turkeyMock]} addTypename={false}>
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    </MockedProvider>,
  );

  await wait(0);
  wrapper.update();

  expect(
    wrapper.containsAllMatchingElements([
      <h1>Github Türkiye İstatistikleri</h1>,
      <p>Toplam Geliştirici: 100</p>,
      <p>Toplam Repository: 100</p>,
      <p>Toplam Dil: 100</p>,
      <p>Toplam Şehir: 100</p>,
    ]),
  ).toBe(true);
});

it('renders the loading state', () => {
  const wrapper = mount(
    <MockedProvider mocks={[]}>
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    </MockedProvider>,
  );

  expect(wrapper.find('p').text()).toEqual('Yükleniyor...');
});

it('renders the error state', async () => {
  const mock = {
    request: { query },
    error: new Error('An error occured.'),
  };

  const wrapper = mount(
    <MockedProvider mocks={[mock]}>
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    </MockedProvider>,
  );

  await wait(0);
  wrapper.update();

  expect(wrapper.find('p').text()).toEqual('Bir hata meydana geldi.');
});

it('has links to list pages', async () => {
  const turkeyMock = {
    request: { query },
    result: {
      data: {
        turkey: {
          totalDevelopers: 100,
          totalLanguages: 100,
          totalLocations: 100,
          totalRepositories: 100,
        },
      },
    },
  };

  const wrapper = mount(
    <MockedProvider mocks={[turkeyMock]} addTypename={false}>
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    </MockedProvider>,
  );

  await wait(0);
  wrapper.update();

  expect(
    wrapper.containsAllMatchingElements([
      <Link to="/developers">Geliştirici İstatistikleri</Link>,
      <Link to="/cities">Şehir İstatistikleri</Link>,
      <Link to="/languages">Dil İstatistikleri</Link>,
      <Link to="/repositories">Repository İstatistikleri</Link>,
    ]),
  ).toBe(true);
});
