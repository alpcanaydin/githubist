// @flow

import React, { type Node } from 'react';
import cx from 'classnames';

import styles from './List.scss';

type Props = {
  children: Node,
  columns: 1 | 2 | 3,
};

const List = ({ children, columns }: Props) => {
  const classes = cx(styles.list, styles[`columns${columns}`]);

  return <div className={classes}>{children}</div>;
};

export default List;
