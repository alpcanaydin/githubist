// @flow

import React, { type Node } from 'react';
import cx from 'classnames';

import styles from './Container.scss';

type Props = {
  children: Node,
  className?: string,
};

const Container = ({ children, className }: Props) => {
  const classes = cx(styles.container, className);

  return <div className={classes}>{children}</div>;
};

Container.defaultProps = {
  className: '',
};

export default Container;
