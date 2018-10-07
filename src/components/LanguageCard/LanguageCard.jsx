// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import { Box } from '..';

import styles from './LanguageCard.scss';

type Props = {
  rank?: number,
  name: string,
  slug: string,
  totalRepositories: number,
  totalDevelopers?: number,
};

const LanguageCard = ({ rank, name, slug, totalRepositories, totalDevelopers }: Props) => (
  <Box>
    <Link to={`/language/${slug}`} className={styles.name}>
      {rank ? `#${rank} ${name}` : name}
    </Link>

    <div className={styles.meta}>
      {totalDevelopers && (
        <Link to={`/language/${slug}/developers`} className={styles.metaItem}>
          {totalDevelopers.toLocaleString()} Geliştirici
        </Link>
      )}
      <Link to={`/language/${slug}/repositories`} className={styles.metaItem}>
        {totalRepositories.toLocaleString()} Repo
      </Link>
    </div>
  </Box>
);

LanguageCard.defaultProps = {
  rank: undefined,
  totalDevelopers: undefined,
};

export default LanguageCard;
