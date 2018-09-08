// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './LanguageCard.scss';

type Props = {
  rank?: number,
  name: string,
  slug: string,
  totalRepositories: number,
  totalDevelopers: number,
};

const LanguageCard = ({ rank, name, slug, totalRepositories, totalDevelopers }: Props) => (
  <div className={styles.languageCard}>
    <Link to={`/language/${slug}`} className={styles.name}>
      {rank ? `#${rank} ${name}` : name}
    </Link>

    <div className={styles.meta}>
      <Link to={`/language/${slug}/developers`} className={styles.metaItem}>
        {totalDevelopers.toLocaleString()} Geliştirici
      </Link>
      <Link to={`/language/${slug}/repositories`} className={styles.metaItem}>
        {totalRepositories.toLocaleString()} Repo
      </Link>
    </div>
  </div>
);

LanguageCard.defaultProps = {
  rank: undefined,
};

export default LanguageCard;
