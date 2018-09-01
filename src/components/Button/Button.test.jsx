// @flow

import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

it('renders correctly primary button', () => {
  const wrapper = shallow(
    <Button type="button" primary>
      Button
    </Button>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly secondary button', () => {
  const wrapper = shallow(
    <Button type="button" secondary>
      Button
    </Button>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly small button', () => {
  const wrapper = shallow(
    <Button type="button" small>
      Button
    </Button>,
  );

  expect(wrapper).toMatchSnapshot();
});

it('renders correctly disabled button', () => {
  const wrapper = shallow(
    <Button type="button" disabled>
      Button
    </Button>,
  );

  expect(wrapper.find('button').prop('disabled')).toBe(true);
});

it('passes custom classnames', () => {
  const wrapper = shallow(
    <Button type="button" className="testClassName">
      Button
    </Button>,
  );

  expect(wrapper.find('button').hasClass('testClassName')).toBe(true);
});
