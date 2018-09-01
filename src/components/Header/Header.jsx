// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Logo } from '..';

import styles from './Header.scss';

const Header = () => (
  <header className={styles.header}>
    <Container>
      <div className={styles.inner}>
        <Link to="/">
          <Logo />
        </Link>

        <nav className={styles.menu}>
          <Link to="/developers" className={styles.menuItem}>
            Geliştiriciler
          </Link>
          <Link to="/cities" className={styles.menuItem}>
            Şehirler
          </Link>
          <Link to="/languages" className={styles.menuItem}>
            Diller
          </Link>
          <Link to="/repositories" className={styles.menuItem}>
            Repolar
          </Link>
        </nav>
      </div>
    </Container>
  </header>
);

export default Header;
