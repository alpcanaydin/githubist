// @flow

import React from 'react';

import styles from './Count.scss';

type Props = {
  count: number,
  title: string,
};

const Count = ({ count, title }: Props) => (
  <div className={styles.container}>
    <h3 className={styles.count}>{count.toLocaleString()}</h3>
    <p className={styles.title}>{title}</p>
  </div>
);

export default Count;
