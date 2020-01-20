import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './navigation.module.scss';

function Navigation({ isOpen }) {
  const navigationClass = isOpen
    ? `${styles.navigation} ${styles['navigation-show']}`
    : `${styles.navigation}`;

  return (
    <div className={navigationClass}>
      {/** mainMenu */}
      <ul className={styles['main-menu']}>
        <li className={styles['main-menu__item']}>
          <Link
            to='/'
            className={styles['main-menu__link']}
            exact
            activeClassName={styles.active}>
            Home
          </Link>
        </li>
        <li className={styles['main-menu__item']}>
          <Link
            to='/produkty'
            className={styles['main-menu__link']}
            activeClassName={styles.active}>
            Produkty
          </Link>
        </li>
        <li className={styles['main-menu__item']}>
          <Link
            to='/technologie'
            className={styles['main-menu__link']}
            activeClassName={styles.active}>
            Technologie
          </Link>
        </li>
      </ul>
      {/** signinMenu */}
      {/** signoutMenu */}
    </div>
  );
}
Navigation.propTypes = {
  isOpen: PropTypes.bool,
};
Navigation.defaultProps = {
  isOpen: false,
};
export default Navigation;
