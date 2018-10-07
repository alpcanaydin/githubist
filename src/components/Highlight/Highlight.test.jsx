// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Highlight from './Highlight';

it('renders correctly', () => {
  const wrapper = shallow(<Highlight subject="3,250" title="Geliştirici" />);

  expect(wrapper).toMatchSnapshot();
});
