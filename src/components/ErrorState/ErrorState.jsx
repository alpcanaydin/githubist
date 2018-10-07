// @flow

import React from 'react';

import { ServerStatus } from '..';

import styles from './ErrorState.scss';

const ErrorState = () => (
  <ServerStatus code={500}>
    <div className={styles.error}>
      <p className={styles.text}>Bir hata meydana geldi.</p>
    </div>
  </ServerStatus>
);

export default ErrorState;
