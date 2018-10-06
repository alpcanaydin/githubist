// @flow

import React from 'react';
import { shallow } from 'enzyme';

import List from './List';

it('renders correctly', () => {
  const wrapper = shallow(
    <List columns={3}>
      <div>Column 1</div>
      <div>Column 2</div>
      <div>Column 3</div>
    </List>,
  );

  expect(wrapper).toMatchSnapshot();
});
