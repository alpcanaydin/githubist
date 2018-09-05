// @flow

import React from 'react';

import { Container, Section } from '..';

import styles from './PageHeading.scss';

type Props = {
  title: string,
  subtitle?: string,
};

const PageHeading = ({ title, subtitle }: Props) => (
  <Section>
    <Container>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </Container>
  </Section>
);

PageHeading.defaultProps = {
  subtitle: '',
};

export default PageHeading;
