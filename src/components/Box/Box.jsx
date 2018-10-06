// @flow

import React, { type Node } from 'react';
import cx from 'classnames';

import styles from './Box.scss';

type Props = {
  children: Node,
  className?: string,
};

const Box = ({ children, className }: Props) => {
  const classes = cx(styles.box, className);

  return <div className={classes}>{children}</div>;
};

Box.defaultProps = {
  className: '',
};

export default Box;
