// @flow

import React, { type Node } from 'react';
import cx from 'classnames';

import styles from './Section.scss';

type Props = {
  children: Node,
  secondary?: boolean,
  className?: string,
};

const Section = ({ children, secondary, className }: Props) => {
  const classNames = cx(styles.section, { [styles.secondary]: secondary }, className);

  return <section className={classNames}>{children}</section>;
};

Section.defaultProps = {
  secondary: false,
  className: '',
};

export default Section;
