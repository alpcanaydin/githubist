// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Logo from './Logo';

it('renders correctly', () => {
  const wrapper = shallow(<Logo />);

  expect(wrapper).toMatchSnapshot();
});

it('passes custom classnames to image', () => {
  const wrapper = shallow(<Logo className="testClassName" />);

  expect(wrapper.find('img').hasClass('testClassName')).toBe(true);
});
