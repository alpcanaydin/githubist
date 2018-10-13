// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import NoData from './NoData';

storiesOf('NoData', module).add('default', () => <NoData text="İçerik bulunamadı." />);
