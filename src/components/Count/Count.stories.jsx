// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import Count from './Count';

storiesOf('Count', module).add('default', () => <Count count={3250} title="Geliştirici" />);
