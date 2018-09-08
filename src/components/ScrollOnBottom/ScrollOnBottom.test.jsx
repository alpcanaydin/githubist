// @flow

import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import ScrollOnBottom from './ScrollOnBottom';
import { Button } from '..';

it('renders children', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <ScrollOnBottom onReach={() => {}} threshold={100}>
        <Button primary type="button">
          Hello
        </Button>
      </ScrollOnBottom>
    </MemoryRouter>,
  );

  expect(wrapper.find('Button').exists()).toBe(true);
});
