// @flow

import React from 'react';

import { Container } from '..';

import styles from './PageHeading.scss';

type Props = {
  title: string,
  subtitle?: string,
};

const PageHeading = ({ title, subtitle }: Props) => (
  <section className={styles.container}>
    <Container>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </Container>
  </section>
);

PageHeading.defaultProps = {
  subtitle: '',
};

export default PageHeading;
