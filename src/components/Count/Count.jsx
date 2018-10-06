// @flow

import React from 'react';

import { Box } from '..';

import styles from './Count.scss';

type Props = {
  count: number,
  title: string,
};

const Count = ({ count, title }: Props) => (
  <Box className={styles.container}>
    <h3 className={styles.count}>{count.toLocaleString()}</h3>
    <p className={styles.title}>{title}</p>
  </Box>
);

export default Count;
