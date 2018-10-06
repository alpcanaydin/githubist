// @flow

import React, { type Node } from 'react';
import cx from 'classnames';

import styles from './LinkBar.scss';

type Props = {
  children: Node,
  withoutGap?: boolean,
  className?: string,
};

const LinkBar = ({ children, withoutGap, className }: Props) => {
  const classNames = cx(styles.linkBar, { [styles.withoutGap]: withoutGap }, className);

  return <div className={classNames}>{children}</div>;
};

LinkBar.defaultProps = {
  withoutGap: false,
  className: '',
};

export default LinkBar;
