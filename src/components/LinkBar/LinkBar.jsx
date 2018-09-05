// @flow

import React, { type Node } from 'react';
import cx from 'classnames';

import styles from './LinkBar.scss';

type Props = {
  children: Node,
  className?: string,
};

const LinkBar = ({ children, className }: Props) => {
  const classNames = cx(styles.linkBar, className);

  return <div className={classNames}>{children}</div>;
};

LinkBar.defaultProps = {
  className: '',
};

export default LinkBar;
