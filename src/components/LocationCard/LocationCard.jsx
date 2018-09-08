// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './LocationCard.scss';

type Props = {
  rank?: number,
  name: string,
  slug: string,
  totalRepositories: number,
  totalDevelopers: number,
};

const LocationCard = ({ rank, name, slug, totalRepositories, totalDevelopers }: Props) => (
  <div className={styles.locationCard}>
    <Link to={`/location/${slug}`} className={styles.name}>
      {rank ? `#${rank} ${name}` : name}
    </Link>

    <div className={styles.meta}>
      <Link to={`/location/${slug}/developers`} className={styles.metaItem}>
        {totalDevelopers.toLocaleString()} Geliştirici
      </Link>
      <Link to={`/location/${slug}/repositories`} className={styles.metaItem}>
        {totalRepositories.toLocaleString()} Repo
      </Link>
    </div>
  </div>
);

LocationCard.defaultProps = {
  rank: undefined,
};

export default LocationCard;
