// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Homepage from './Homepage';

it('renders correctly', () => {
  const wrapper = shallow(<Homepage />);

  expect(wrapper).toMatchSnapshot();
});
