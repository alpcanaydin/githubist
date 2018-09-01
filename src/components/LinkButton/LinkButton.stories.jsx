// @flow

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import LinkButton from './LinkButton';

storiesOf('LinkButton', module)
  .add('primary', () => (
    <MemoryRouter>
      <LinkButton to="/" primary>
        Primary Button
      </LinkButton>
    </MemoryRouter>
  ))
  .add('secondary', () => (
    <MemoryRouter>
      <LinkButton to="/" secondary>
        Secondary Button
      </LinkButton>
    </MemoryRouter>
  ))
  .add('small', () => (
    <MemoryRouter>
      <LinkButton to="/" primary small>
        Small Button
      </LinkButton>
    </MemoryRouter>
  ));
