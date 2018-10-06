// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import { Avatar, Box } from '..';

import toDateString from '../../utils/toDateString';

import styles from './DeveloperCard.scss';

type Props = {
  rank?: number,
  name: string,
  username: string,
  profilePicture: string,
  company?: string,
  followers: number,
  totalStarred: number,
  repositoriesCount: number,
  location: { name: string, slug: string },
  githubCreatedAt?: string,
};

const DeveloperCard = ({
  rank,
  name,
  username,
  profilePicture,
  company,
  followers,
  totalStarred,
  repositoriesCount,
  location,
  githubCreatedAt,
}: Props) => (
  <Box>
    <div className={styles.profile}>
      <Link to={`/${username}`} className={styles.avatar}>
        <Avatar size="small" url={profilePicture} alt={name} />
      </Link>

      <div className={styles.info}>
        <Link to={`/${username}`} className={styles.nameAndUsername}>
          {rank && <span className={styles.rank}>#{rank}</span>}
          <span className={styles.name}>{name}</span>
          <span className={styles.username}>{username}</span>
        </Link>
        {company && <p className={styles.company}>{company}</p>}
      </div>
    </div>

    <div className={styles.meta}>
      <Link to={`/location/${location.slug}`} className={cx(styles.metaItem, styles.location)}>
        {location.name}
      </Link>
      <span className={styles.metaItem}>{totalStarred.toLocaleString()} Star&apos;lanma</span>
      <span className={styles.metaItem}>{followers.toLocaleString()} Takipçi</span>
      <span className={styles.metaItem}>{repositoriesCount.toLocaleString()} Repo</span>
      {githubCreatedAt && (
        <span className={cx(styles.metaItem, styles.githubCreatedAt)}>
          {toDateString(githubCreatedAt)}
        </span>
      )}
    </div>
  </Box>
);

DeveloperCard.defaultProps = {
  rank: undefined,
  githubCreatedAt: '',
  company: '',
};

export default DeveloperCard;
