// @flow

import React from 'react';

import styles from './Hero.scss';

import { Container } from '..';

import githubLogo from '../../img/github.svg';

type Props = {
  description: string,
};

const Hero = ({ description }: Props) => (
  <div className={styles.hero}>
    <Container>
      <div className={styles.inner}>
        <div>
          <h6 className={styles.badge}>2018</h6>
          <h1 className={styles.title}>
            Github
            <br />
            Türkiye İstatistikleri
          </h1>
          <p className={styles.description}>{description}</p>
        </div>

        <img src={githubLogo} className={styles.image} alt="Github" width={431} height={420} />
      </div>
    </Container>
  </div>
);

export default Hero;
