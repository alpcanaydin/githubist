// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Container from './Container';

it('renders correctly', () => {
  const wrapper = shallow(
    <Container>
      <p>Hello world</p>
    </Container>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('passes custom classnames to image', () => {
  const wrapper = shallow(
    <Container className="testClassName">
      <p>Hello world</p>
    </Container>,
  );

  expect(wrapper.find('div').hasClass('testClassName')).toBe(true);
});
