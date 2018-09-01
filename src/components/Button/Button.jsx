// @flow

import React, { type Node } from 'react';
import cx from 'classnames';

import styles from './Button.scss';

type Props = {
  children: Node,
  type: 'button' | 'submit' | 'reset',
  primary?: boolean,
  secondary?: boolean,
  small?: boolean,
  className?: string,
  disabled?: boolean,
};

const Button = ({ children, type, primary, secondary, small, className, disabled }: Props) => {
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
    <button type={type} className={classNames} disabled={disabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  primary: false,
  secondary: false,
  small: false,
  className: '',
  disabled: false,
};

export default Button;
