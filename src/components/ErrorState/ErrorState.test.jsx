// @flow

import React from 'react';
import { shallow } from 'enzyme';

import ErrorState from './ErrorState';

it('renders correctly', () => {
  const wrapper = shallow(<ErrorState />);

  expect(wrapper).toMatchSnapshot();
});
