// @flow

import { configure } from '@storybook/react';

/* $FlowIgnoreNextLine */
const req = require.context('../src/components', true, /\.stories\.jsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
