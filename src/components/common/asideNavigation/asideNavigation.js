import React from 'react';
import PropTypes from 'prop-types';
import styles from './asideNavigation.module.scss';

function AsideNavigation({ children }) {
  return <div className={styles['aside-navigation']}>{children}</div>;
}

AsideNavigation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
AsideNavigation.defaultProps = {
  children: null,
};
export default AsideNavigation;
