// @flow

import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';
import { Button } from '..';

window.scrollTo = jest.fn();

it('calls scrollTo when component has been updated', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <ScrollToTop>
        <Button primary type="button">
          Hello
        </Button>
      </ScrollToTop>
    </MemoryRouter>,
  );

  wrapper
    .find('ScrollToTop')
    .instance()
    .props.history.push('/new-route');

  expect(window.scrollTo).toBeCalledTimes(1);
  expect(window.scrollTo).toBeCalledWith(0, 0);
});

it('renders children', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <ScrollToTop>
        <Button primary type="button">
          Hello
        </Button>
      </ScrollToTop>
    </MemoryRouter>,
  );

  expect(wrapper.find('Button').exists()).toBe(true);
});
