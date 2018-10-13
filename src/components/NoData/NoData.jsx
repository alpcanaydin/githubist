// @flow

import React from 'react';

import styles from './NoData.scss';

type Props = {
  text: string,
};

const NoData = ({ text }: Props) => (
  <div className={styles.noData}>
    <p className={styles.text}>{text}</p>
  </div>
);

export default NoData;
