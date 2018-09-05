// @flow

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import LinkBar from './LinkBar';
import Item from './Item';

it('renders correctly', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <LinkBar>
        <Item to="/link-1">Link 1</Item>
        <Item to="/link-2">Link 2</Item>
        <Item to="/link-3">Link 3</Item>
      </LinkBar>
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly with active item', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <LinkBar>
        <Item to="/link-1" isActive={() => true}>
          Link 1
        </Item>
        <Item to="/link-2">Link 2</Item>
        <Item to="/link-3">Link 3</Item>
      </LinkBar>
    </MemoryRouter>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('passes custom classnames to container', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <LinkBar className="testClassName">
        <Item to="/link-1">Link 1</Item>
      </LinkBar>
    </MemoryRouter>,
  );

  expect(wrapper.find('div').hasClass('testClassName')).toBe(true);
});

it('passes custom classnames to item', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <LinkBar>
        <Item to="/link-1" className="testClassName">
          Link 1
        </Item>
      </LinkBar>
    </MemoryRouter>,
  );

  expect(wrapper.find('a').hasClass('testClassName')).toBe(true);
});

it('passes custom active classnames to item', () => {
  const wrapper = mount(
    <MemoryRouter keyLength={0}>
      <LinkBar>
        <Item to="/link-1" activeClassName="testClassName" isActive={() => true}>
          Link 1
        </Item>
      </LinkBar>
    </MemoryRouter>,
  );

  expect(wrapper.find('a').hasClass('testClassName')).toBe(true);
});
