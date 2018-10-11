// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import { MemoryRouter } from 'react-router-dom';

import LinkBar from './LinkBar';
import Item from './Item';

storiesOf('LinkBar', module)
  .addDecorator(backgrounds([{ name: 'dark', value: '#2d2e33', default: true }]))
  .add('default', () => (
    <div style={{ backgroundColor: '#fff' }}>
      <MemoryRouter>
        <LinkBar>
          <Item to="/link-1" isActive={() => true}>
            Link 1
          </Item>
          <Item to="/link-2">Link 2</Item>
          <Item to="/link-3">Link 3</Item>
        </LinkBar>
      </MemoryRouter>
    </div>
  ))
  .add('with outside link', () => (
    <div style={{ backgroundColor: '#fff' }}>
      <MemoryRouter>
        <LinkBar>
          <Item to="/link-1" isActive={() => true}>
            Link 1
          </Item>
          <Item to="/link-2">Link 2</Item>
          <Item to="/link-3">Link 3</Item>
          <Item to="https://github.com" outside>
            Github
          </Item>
        </LinkBar>
      </MemoryRouter>
    </div>
  ))
  .add('without gap', () => (
    <div style={{ backgroundColor: '#fff' }}>
      <MemoryRouter>
        <LinkBar withoutGap>
          <Item to="/link-1" isActive={() => true}>
            Link 1
          </Item>
          <Item to="/link-2">Link 2</Item>
          <Item to="/link-3">Link 3</Item>
        </LinkBar>
      </MemoryRouter>
    </div>
  ));
