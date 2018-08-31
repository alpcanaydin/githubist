// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import { Avatar } from '..';

import styles from './BasicDeveloperCard.scss';

type Props = {
  profilePicture: string,
  name: string,
  username: string,
  info?: string,
};

const BasicDeveloperCard = ({ profilePicture, name, username, info }: Props) => (
  <div className={styles.basicDeveloperCard}>
    <Link to={`/${username}`} className={styles.avatar}>
      <Avatar url={profilePicture} alt={name} />
    </Link>

    <Link to={`/${username}`} className={styles.nameAndUsername}>
      <span className={styles.name}>{name}</span>
      <span className={styles.username}>{username}</span>
    </Link>

    {info && <p className={styles.info}>{info}</p>}
  </div>
);

BasicDeveloperCard.defaultProps = {
  info: undefined,
};

export default BasicDeveloperCard;
