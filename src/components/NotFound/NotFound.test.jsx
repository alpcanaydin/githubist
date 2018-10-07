// @flow

import React from 'react';
import { shallow } from 'enzyme';

import NotFound from './NotFound';

it('renders correctly', () => {
  const wrapper = shallow(<NotFound />);

  expect(wrapper).toMatchSnapshot();
});
