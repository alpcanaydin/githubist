// @flow

import React from 'react';
import { shallow } from 'enzyme';

import BarChart from './BarChart';

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
  const wrapper = shallow(<BarChart items={items}>{item => <div>{item.name}</div>}</BarChart>);

  expect(wrapper).toMatchSnapshot();
});
