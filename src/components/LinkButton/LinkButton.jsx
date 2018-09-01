// @flow

import React, { type Node } from 'react';
import { Link, type LocationShape } from 'react-router-dom';
import cx from 'classnames';

import styles from './LinkButton.scss';

type Props = {
  to: string | LocationShape,
  children: Node,
  primary?: boolean,
  secondary?: boolean,
  small?: boolean,
  className?: string,
};

const LinkButton = ({ children, to, primary, secondary, small, className }: Props) => {
  const classNames = cx(
    styles.button,
    {
      [styles.primary]: primary,
      [styles.secondary]: secondary,
      [styles.small]: small,
    },
    className,
  );

  return (
    <Link to={to} className={classNames}>
      {children}
    </Link>
  );
};

LinkButton.defaultProps = {
  primary: false,
  secondary: false,
  small: false,
  className: '',
};

export default LinkButton;
