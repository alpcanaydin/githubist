// @flow

import React from 'react';
import { shallow } from 'enzyme';

import LocationChart from './LocationChart';

const items = [
  {
    name: 'Item 1',
    slug: 'item1',
    score: 100,
    totalRepositories: 100,
    totalDevelopers: 100,
  },
  {
    name: 'Item 2',
    slug: 'item2',
    score: 80,
    totalRepositories: 100,
    totalDevelopers: 100,
  },
  {
    name: 'Item 3',
    slug: 'item3',
    score: 10,
    totalRepositories: 100,
    totalDevelopers: 100,
  },
];

it('renders correctly', () => {
  const wrapper = shallow(
    <LocationChart items={items}>{item => <div>{item.name}</div>}</LocationChart>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('sets maxScore to 1 if no location provided', () => {
  const wrapper = shallow(
    <LocationChart items={[]}>{item => <div>{item.name}</div>}</LocationChart>,
  );

  expect(wrapper.state('maxScore')).toEqual(1);
});
