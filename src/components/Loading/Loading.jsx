// @flow

import React from 'react';

import styles from './Loading.scss';

const Loading = () => (
  <div className={styles.loading}>
    <p className={styles.text}>Yükleniyor...</p>
  </div>
);

export default Loading;
