// @flow

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

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

storiesOf('LanguageBox', module)
  .add('default', () => (
    <MemoryRouter>
      <div style={{ width: '250px' }}>
        <LanguageBox name="JavaScript" slug="javascript" style={colors.javascript} />
      </div>
    </MemoryRouter>
  ))
  .add('with light text', () => (
    <MemoryRouter>
      <div style={{ width: '250px' }}>
        <LanguageBox name="Java" slug="java" style={colors.java} />
      </div>
    </MemoryRouter>
  ));
