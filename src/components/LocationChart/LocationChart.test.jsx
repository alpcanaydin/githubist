// @flow

import React from 'react';
import { shallow } from 'enzyme';

import LocationChart from './LocationChart';

const items = [
  {
    name: 'Item 1',
    slug: 'item1',
    score: 100,
  },
  {
    name: 'Item 2',
    slug: 'item2',
    score: 80,
  },
  {
    name: 'Item 3',
    slug: 'item3',
    score: 10,
  },
];

it('renders correctly', () => {
  const wrapper = shallow(
    <LocationChart items={items}>{item => <div>{item.name}</div>}</LocationChart>,
  );

  expect(wrapper).toMatchSnapshot();
});
