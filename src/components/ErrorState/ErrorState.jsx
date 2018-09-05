// @flow

import React from 'react';

import styles from './ErrorState.scss';

const ErrorState = () => (
  <div className={styles.error}>
    <p className={styles.text}>Bir hata meydana geldi.</p>
  </div>
);

export default ErrorState;
