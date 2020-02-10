import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';
import styles from './titleNavigation.module.scss';

function TitleNavigation({ path, label, titleNavigationClass }) {
  const titleClass = `${styles['title-navigation']} ${styles[titleNavigationClass]}`;
  return (
    <Link to={path} className={titleClass} activeClassName={styles.active}>
      {label}
    </Link>
  );
}
TitleNavigation.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  titleNavigationClass: PropTypes.string,
};
TitleNavigation.defaultProps = {
  titleNavigationClass: 'title-navigation--default',
};
export default TitleNavigation;
