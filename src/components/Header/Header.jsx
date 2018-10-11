// @flow

import React, { Component } from 'react';
import { withRouter, Link, NavLink, type Location } from 'react-router-dom';
import cx from 'classnames';

import { Container, Logo } from '..';

import styles from './Header.scss';

type Props = {
  location: Location,
};

type State = {
  isHamburgerActive: boolean,
};

class Header extends Component<Props, State> {
  state = {
    isHamburgerActive: false,
  };

  componentDidUpdate(prevProps: Props) {
    const { location } = this.props;

    if (window && location !== prevProps.location) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ isHamburgerActive: false });
    }
  }

  toggleHamburger = (event: SyntheticEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const { isHamburgerActive } = this.state;

    this.setState({ isHamburgerActive: !isHamburgerActive });
  };

  render() {
    const { isHamburgerActive } = this.state;

    return (
      <header className={styles.header}>
        <Container className={styles.inner}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <Logo />
            </Link>

            {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus, jsx-a11y/click-events-have-key-events, jsx-a11y/anchor-is-valid */}
            <a
              href="#"
              role="button"
              className={cx(styles.burgerMenu, {
                [styles.isActive]: isHamburgerActive,
              })}
              aria-label="menu"
              aria-expanded="false"
              onClick={this.toggleHamburger}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <nav className={cx(styles.menu, { [styles.isNavActive]: isHamburgerActive })}>
            <NavLink to="/developers" className={styles.menuItem} activeClassName={styles.isActive}>
              Geliştiriciler
            </NavLink>
            <NavLink to="/locations" className={styles.menuItem} activeClassName={styles.isActive}>
              Şehirler
            </NavLink>
            <NavLink to="/languages" className={styles.menuItem} activeClassName={styles.isActive}>
              Diller
            </NavLink>
            <NavLink
              to="/repositories"
              className={styles.menuItem}
              activeClassName={styles.isActive}
            >
              Repolar
            </NavLink>
          </nav>
        </Container>
      </header>
    );
  }
}

export default withRouter(Header);
