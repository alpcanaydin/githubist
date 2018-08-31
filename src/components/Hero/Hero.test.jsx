// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Hero from './Hero';

it('renders correctly', () => {
  const wrapper = shallow(<Hero description="Lorem ipsum dolar sit amet." />);

  expect(wrapper).toMatchSnapshot();
});
