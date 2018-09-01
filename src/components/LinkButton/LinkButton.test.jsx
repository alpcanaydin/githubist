// @flow

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import LinkButton from './LinkButton';

it('renders correctly primary button', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <LinkButton to="/" primary>
        Button
      </LinkButton>
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly secondary button', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <LinkButton to="/" secondary>
        Button
      </LinkButton>
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly small button', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <LinkButton to="/" small>
        Button
      </LinkButton>
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('passes custom classnames', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <LinkButton to="/" className="testClassName">
        Button
      </LinkButton>
    </MemoryRouter>,
  );

  expect(wrapper.find('a').hasClass('testClassName')).toBe(true);
});
