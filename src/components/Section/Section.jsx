// @flow

import React, { type Node } from 'react';
import cx from 'classnames';

import styles from './Section.scss';

type Props = {
  children: Node,
  primary?: boolean,
  secondary?: boolean,
  className?: string,
};

const Section = ({ children, primary, secondary, className }: Props) => {
  const classNames = cx(
    styles.section,
    { [styles.primary]: primary, [styles.secondary]: secondary },
    className,
  );

  return <section className={classNames}>{children}</section>;
};

Section.defaultProps = {
  primary: false,
  secondary: false,
  className: '',
};

export default Section;
