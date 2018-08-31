// @flow

import React, { type Node } from 'react';
import cx from 'classnames';

import styles from './SectionBody.scss';

type Props = {
  children: Node,
  className?: string,
};

const SectionBody = ({ children, className }: Props) => {
  const classes = cx(styles.sectionBody, className);

  return <div className={classes}>{children}</div>;
};

SectionBody.defaultProps = {
  className: '',
};

export default SectionBody;
