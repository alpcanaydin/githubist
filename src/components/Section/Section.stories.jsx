// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import Section from './Section';

storiesOf('Section', module)
  .add('primary', () => (
    <Section primary>
      <div>Section text</div>
    </Section>
  ))
  .add('secondary', () => (
    <Section secondary>
      <div>Section text</div>
    </Section>
  ));
