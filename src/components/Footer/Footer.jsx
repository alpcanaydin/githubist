// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Logo, Section } from '..';

import styles from './Footer.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <Section>
      <Container>
        <div className={styles.inner}>
          <div styles={styles.info}>
            <Logo />
            <p className={styles.copyright}>
              Alpcan Aydın, 2018
              <br />
              MIT lisansı ile lisanslanmıştır.
            </p>
          </div>

          <div className={styles.menu}>
            <h5 className={styles.menuTitle}>İstatistikler</h5>
            <ul className={styles.menuLinks}>
              <li className={styles.menuItem}>
                <Link to="/developers" className={styles.menuLink}>
                  Geliştiriciler
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link to="/locations" className={styles.menuLink}>
                  Şehirler
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link to="/languages" className={styles.menuLink}>
                  Diller
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link to="/repositories" className={styles.menuLink}>
                  Repolar
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.menu}>
            <h5 className={styles.menuTitle}>Data</h5>
            <ul className={styles.menuLinks}>
              <li className={styles.menuItem}>
                <a
                  href={process.env.GRAPHIQL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.menuLink}
                >
                  GraphiQL
                </a>
              </li>
              <li className={styles.menuItem}>
                <a
                  href={process.env.SQL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.menuLink}
                >
                  SQL Dosyası
                </a>
              </li>
              <li className={styles.menuItem}>
                <a
                  href={process.env.JSONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.menuLink}
                >
                  JSON Dosyaları
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.menu}>
            <h5 className={styles.menuTitle}>Kaynak Kodları</h5>
            <ul className={styles.menuLinks}>
              <li className={styles.menuItem}>
                <a
                  href={process.env.GITHUB_WEB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.menuLink}
                >
                  Web
                </a>
              </li>
              <li className={styles.menuItem}>
                <a
                  href={process.env.GITHUB_API_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.menuLink}
                >
                  API
                </a>
              </li>
              <li className={styles.menuItem}>
                <a
                  href={process.env.GITHUB_FETCHER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.menuLink}
                >
                  Fetcher
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  </footer>
);

export default Footer;
