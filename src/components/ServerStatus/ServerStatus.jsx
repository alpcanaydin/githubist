// @flow

import React, { type Node } from 'react';
import { Route } from 'react-router-dom';

type Props = {
  code: number,
  children: Node,
};

const Status = ({ code, children }: Props) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) {
        /* eslint-disable no-param-reassign */
        /* $FlowIgnoreNextLine */
        staticContext.serverStatusCode = code;
        /* eslint-enable no-param-reassign */
      }

      return children;
    }}
  />
);

export default Status;
