// @flow

import React from 'react';

import { Box } from '..';

import styles from './Highlight.scss';

type Props = {
  subject: string,
  title: string,
};

const Highlight = ({ subject, title }: Props) => (
  <Box className={styles.container}>
    <h3 className={styles.subject}>{subject}</h3>
    <p className={styles.title}>{title}</p>
  </Box>
);

export default Highlight;
