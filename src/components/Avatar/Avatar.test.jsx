// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Avatar from './Avatar';

it('renders correctly', () => {
  const wrapper = shallow(<Avatar url="https://via.placeholder.com/150" alt="Default image" />);

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly as small', () => {
  const wrapper = shallow(
    <Avatar url="https://via.placeholder.com/150" alt="Default image" size="small" />,
  );

  expect(wrapper).toMatchSnapshot();
});
