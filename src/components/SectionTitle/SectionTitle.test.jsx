// @flow

import React from 'react';
import { shallow } from 'enzyme';

import SectionTitle from './SectionTitle';

it('renders correctly', () => {
  const wrapper = shallow(<SectionTitle subject="Subject">Hello world</SectionTitle>);

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly without subject', () => {
  const wrapper = shallow(<SectionTitle>Hello world</SectionTitle>);

  expect(wrapper).toMatchSnapshot();
});

it('passes custom classnames', () => {
  const wrapper = shallow(<SectionTitle className="testClassName">Hello world</SectionTitle>);

  expect(wrapper.find('div').hasClass('testClassName')).toBe(true);
});
