// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import { MemoryRouter } from 'react-router-dom';

import LanguageCard from './LanguageCard';

storiesOf('LanguageCard', module)
  .addDecorator(backgrounds([{ name: 'light', value: '#fcfafa', default: true }]))
  .add('default', () => (
    <MemoryRouter>
      <div style={{ width: '320px', margin: '16px' }}>
        <LanguageCard
          name="JavaScript"
          slug="javascript"
          totalRepositories={2150}
          totalDevelopers={768}
        />
      </div>
    </MemoryRouter>
  ))
  .add('with rank', () => (
    <MemoryRouter>
      <div style={{ width: '320px', margin: '16px' }}>
        <LanguageCard
          rank={1}
          name="JavaScript"
          slug="javascript"
          totalRepositories={2150}
          totalDevelopers={768}
        />
      </div>
    </MemoryRouter>
  ))
  .add('without developers count', () => (
    <MemoryRouter>
      <div style={{ width: '320px', margin: '16px' }}>
        <LanguageCard rank={1} name="JavaScript" slug="javascript" totalRepositories={2150} />
      </div>
    </MemoryRouter>
  ));
