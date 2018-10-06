// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Count from './Count';

it('renders correctly', () => {
  const wrapper = shallow(<Count count={3250} title="Geliştirici" />);

  expect(wrapper).toMatchSnapshot();
});
