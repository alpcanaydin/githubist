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
      <span className={styles.metaItem}>{totalDevelopers.toLocaleString()} Geliştirici</span>
      <span className={styles.metaItem}>{totalRepositories.toLocaleString()} Repo</span>
    </div>
  </div>
);

LanguageCard.defaultProps = {
  rank: undefined,
};

export default LanguageCard;
