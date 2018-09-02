// @flow

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './LanguageBox.scss';

type Props = {
  name: string,
  slug: string,
  style: {
    backgroundColor: string,
    color: string,
  },
};

const LanguageBox = ({ name, slug, style }: Props) => (
  <Link to={`/language/${slug}`} className={styles.languageBox} style={style}>
    {name}
  </Link>
);

export default LanguageBox;
