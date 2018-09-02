// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import styles from './RepoCard.scss';

type Props = {
  slug: string,
  description?: string,
  language: {
    name: string,
    slug: string,
  },
  stars: number,
  forks: number,
};

const RepoCard = ({ slug, description, language, stars, forks }: Props) => (
  <div className={styles.repoCard}>
    <Link to={`/repo/${slug}`} className={styles.name}>
      {slug}
    </Link>
    {description && <p className={styles.description}>{description}</p>}

    <div className={styles.meta}>
      <Link to={`/language/${language.slug}`} className={cx(styles.metaItem, styles.language)}>
        {language.name}
      </Link>
      <span className={styles.metaItem}>{stars.toLocaleString()} Star</span>
      <span className={styles.metaItem}>{forks.toLocaleString()} Fork</span>
    </div>
  </div>
);

RepoCard.defaultProps = {
  description: '',
};

export default RepoCard;
