// @flow

import React from 'react';
import cx from 'classnames';

import logo from '../../img/logo.svg';

import styles from './Logo.scss';

type Props = {
  className?: string,
  alt?: string,
};

const Logo = ({ className, alt }: Props) => {
  const classes = cx(styles.logo, className);

  return <img src={logo} alt={alt} className={classes} />;
};

Logo.defaultProps = {
  className: '',
  alt: 'Github.ist',
};

export default Logo;
