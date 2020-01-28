import React from 'react';
import PropTypes from 'prop-types';
import styles from './navigation.module.scss';

import SigninMenu from './signinMenu';
import MainMenu from './mainMenu';
import Logo from '../../logo';

function Navigation({ isOpen }) {
  const navigationClass = isOpen
    ? `${styles.navigation} ${styles['navigation-show']}`
    : `${styles.navigation}`;

  return (
    <div className={navigationClass}>
      <div className={styles.inner}>
        <Logo logoClass="logo-rounded" />
        <MainMenu />
        <SigninMenu />
        {/** signoutMenu */}
      </div>
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
