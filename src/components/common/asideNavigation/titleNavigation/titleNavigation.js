import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';
import styles from './titleNavigation.module.scss';

function TitleNavigation({ path, label }) {
  return (
    <Link to={path} className={styles['title-navigation']}>
      {label}
    </Link>
  );
}
TitleNavigation.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
export default TitleNavigation;
