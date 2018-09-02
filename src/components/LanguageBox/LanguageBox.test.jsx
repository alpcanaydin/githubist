// @flow

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import LanguageBox from './LanguageBox';

const colors = {
  javascript: {
    backgroundColor: '#FFC157',
    color: '#000',
  },

  java: {
    backgroundColor: '5781FF',
    color: '#fff',
  },
};

it('renders correctly', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <LanguageBox name="JavaScript" slug="javascript" style={colors.javascript} />
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly light box', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <LanguageBox name="Java" slug="java" style={colors.java} />
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});
