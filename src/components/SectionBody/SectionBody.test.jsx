// @flow

import React from 'react';
import { shallow } from 'enzyme';

import SectionBody from './SectionBody';

it('renders correctly', () => {
  const wrapper = shallow(
    <SectionBody>
      <p>Hello world</p>
    </SectionBody>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('passes custom classnames', () => {
  const wrapper = shallow(
    <SectionBody className="testClassName">
      <p>Hello world</p>
    </SectionBody>,
  );

  expect(wrapper.find('div').hasClass('testClassName')).toBe(true);
});
