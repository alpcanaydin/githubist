// @flow

import React from 'react';
import cx from 'classnames';

import styles from './Avatar.scss';

type Props = {
  url: string,
  alt: string,
  size?: 'default' | 'small',
};

const Avatar = ({ url, alt, size }: Props) => {
  const classNames = cx(styles.avatar, {
    [styles.default]: size === 'default',
    [styles.small]: size === 'small',
  });

  return <img src={url} alt={alt} className={classNames} />;
};

Avatar.defaultProps = {
  size: 'default',
};

export default Avatar;
