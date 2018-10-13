// @flow

import React from 'react';
import { shallow } from 'enzyme';

import NoData from './NoData';

it('renders correctly', () => {
  const wrapper = shallow(<NoData text="İçerik bulunamadı." />);

  expect(wrapper).toMatchSnapshot();
});
