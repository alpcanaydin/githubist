// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import toDateString from '../../utils/toDateString';

import styles from './RepoCard.scss';

type Props = {
  rank?: number,
  slug: string,
  description?: string,
  language: {
    name: string,
    slug: string,
  },
  stars: number,
  forks: number,
  githubCreatedAt?: string,
};

const RepoCard = ({ rank, slug, description, language, stars, forks, githubCreatedAt }: Props) => (
  <div className={styles.repoCard}>
    <div>
      <Link to={`/${slug}`} className={styles.name}>
        {rank ? `#${rank} ${slug}` : slug}
      </Link>
      {description && <p className={styles.description}>{description}</p>}
    </div>

    <div className={styles.meta}>
      <Link to={`/language/${language.slug}`} className={cx(styles.metaItem, styles.language)}>
        {language.name}
      </Link>
      <span className={styles.metaItem}>{stars.toLocaleString()} Star</span>
      <span className={styles.metaItem}>{forks.toLocaleString()} Fork</span>
      {githubCreatedAt && (
        <span className={cx(styles.metaItem, styles.githubCreatedAt)}>
          {toDateString(githubCreatedAt)}
        </span>
      )}
    </div>
  </div>
);

RepoCard.defaultProps = {
  rank: undefined,
  description: '',
  githubCreatedAt: '',
};

export default RepoCard;
