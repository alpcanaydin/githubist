// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Loading from './Loading';

it('renders correctly', () => {
  const wrapper = shallow(<Loading />);

  expect(wrapper).toMatchSnapshot();
});
