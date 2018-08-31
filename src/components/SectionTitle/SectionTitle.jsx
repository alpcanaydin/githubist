// @flow

import React, { type Node } from 'react';
import cx from 'classnames';

import styles from './SectionTitle.scss';

type Props = {
  children: Node,
  subject?: string,
  className?: string,
};

const SectionTitle = ({ children, subject, className }: Props) => {
  const classNames = cx(styles.sectionTitle, className);

  return (
    <div className={classNames}>
      {subject && <small className={styles.subject}>{subject}</small>}
      <h2 className={styles.title}>{children}</h2>
    </div>
  );
};

SectionTitle.defaultProps = {
  subject: undefined,
  className: '',
};

export default SectionTitle;
