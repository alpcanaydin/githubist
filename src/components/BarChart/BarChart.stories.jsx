// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

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

storiesOf('BarChart', module).add('default', () => (
  <BarChart items={items}>{item => <div>{item.name}</div>}</BarChart>
));
