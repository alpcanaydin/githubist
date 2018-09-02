// @flow

import React, { type Node } from 'react';

import styles from './LocationChart.scss';

type Props = {
  rank: number,
  percentage: number,
  children: Node,
};

const Item = ({ children, rank, percentage }: Props) => (
  <div className={styles.item}>
    <div className={styles.rank}>{rank}</div>
    <div className={styles.outer}>
      <div className={styles.bar} style={{ width: `${percentage.toString()}%` }}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  </div>
);

export default Item;
