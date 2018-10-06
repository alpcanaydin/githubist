// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Box from './Box';

it('renders correctly', () => {
  const wrapper = shallow(
    <Box>
      <p>Hello world</p>
    </Box>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('passes custom classnames', () => {
  const wrapper = shallow(
    <Box className="testClassName">
      <p>Hello world</p>
    </Box>,
  );

  expect(wrapper.find('div').hasClass('testClassName')).toBe(true);
});
