// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import { Avatar, Box } from '..';

import toDateString from '../../utils/toDateString';
import abbrNumber from '../../utils/abbrNumber';

import styles from './DeveloperCard.scss';

type Props = {
  rank?: number,
  name: string,
  username: string,
  profilePicture: string,
  company?: string,
  followers?: number,
  totalStarred?: number,
  repositoriesCount?: number,
  repoText?: string,
  location?: { name: string, slug: string },
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
  repoText,
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
      {location && (
        <Link to={`/location/${location.slug}`} className={cx(styles.metaItem, styles.location)}>
          {location.name}
        </Link>
      )}
      {typeof totalStarred !== 'undefined' && (
        <span className={styles.metaItem}>{abbrNumber(totalStarred)} Star&apos;lanma</span>
      )}
      {typeof followers !== 'undefined' && (
        <span className={cx(styles.metaItem)}>{abbrNumber(followers)} Takipçi</span>
      )}
      {typeof repositoriesCount !== 'undefined' && (
        <span className={cx(styles.metaItem)}>
          {repositoriesCount.toLocaleString()} {repoText}
        </span>
      )}
      {githubCreatedAt && (
        <span className={cx(styles.metaItem)}>{toDateString(githubCreatedAt)}</span>
      )}
    </div>
  </Box>
);

DeveloperCard.defaultProps = {
  rank: undefined,
  followers: undefined,
  totalStarred: undefined,
  location: undefined,
  githubCreatedAt: '',
  company: '',
  repositoriesCount: undefined,
  repoText: 'Repo',
};

export default DeveloperCard;
