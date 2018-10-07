// @flow

import React from 'react';

import { LinkButton, ServerStatus } from '..';

import styles from './NotFound.scss';

const NotFound = () => (
  <ServerStatus code={404}>
    <div className={styles.notFound}>
      <p className={styles.text}>Aradığınız sayfa bulunamadı.</p>
      <LinkButton to="/" primary>
        Anasayfaya Dön
      </LinkButton>
    </div>
  </ServerStatus>
);

export default NotFound;
