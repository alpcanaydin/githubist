// @flow

import React, { type Node } from 'react';
import { NavLink, type LocationShape, type Match, type Location } from 'react-router-dom';
import cx from 'classnames';

import styles from './LinkBar.scss';

type Props = {
  children: Node,
  to: string | LocationShape,
  isActive?: (match: Match, location: Location) => boolean,
  exact?: boolean,
  outside?: boolean,
  className?: string,
  activeClassName?: string,
};

const Item = ({ children, to, isActive, exact, outside, className, activeClassName }: Props) => {
  const classNames = cx(styles.item, className);
  const activeClassNames = cx(styles.isActive, activeClassName);

  if (outside) {
    return (
      <a href={to} className={classNames} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <NavLink
      to={to}
      className={classNames}
      isActive={isActive}
      exact={exact}
      activeClassName={activeClassNames}
    >
      {children}
    </NavLink>
  );
};

Item.defaultProps = {
  isActive: undefined,
  exact: false,
  outside: false,
  className: '',
  activeClassName: '',
};

export default Item;
