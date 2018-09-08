// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

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

storiesOf('LocationChart', module).add('default', () => (
  <LocationChart items={items}>{item => <div>{item.name}</div>}</LocationChart>
));
