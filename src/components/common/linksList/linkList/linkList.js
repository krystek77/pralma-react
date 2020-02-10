import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';
import styles from './linkList.module.scss';

function LinkList({ path, label }) {
  return (
    <li className={styles['links-list__item']}>
      <Link
        to={path}
        className={styles['links-list__link']}
        activeClassName={styles.active}>
        {label}
      </Link>
    </li>
  );
}

LinkList.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default LinkList;
