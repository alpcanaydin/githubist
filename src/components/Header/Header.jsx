// @flow

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

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
          <NavLink to="/developers" className={styles.menuItem} activeClassName={styles.isActive}>
            Geliştiriciler
          </NavLink>
          <NavLink to="/cities" className={styles.menuItem} activeClassName={styles.isActive}>
            Şehirler
          </NavLink>
          <NavLink to="/languages" className={styles.menuItem} activeClassName={styles.isActive}>
            Diller
          </NavLink>
          <NavLink to="/repositories" className={styles.menuItem} activeClassName={styles.isActive}>
            Repolar
          </NavLink>
        </nav>
      </div>
    </Container>
  </header>
);

export default Header;
