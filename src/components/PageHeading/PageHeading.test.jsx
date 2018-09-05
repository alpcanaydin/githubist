// @flow

import React from 'react';
import { shallow } from 'enzyme';

import PageHeading from './PageHeading';

it('renders correctly', () => {
  const wrapper = shallow(<PageHeading title="Repos" subtitle="Lorem ipsum dolar sit amet." />);

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly without subtitle', () => {
  const wrapper = shallow(<PageHeading title="Repos" />);

  expect(wrapper).toMatchSnapshot();
});
