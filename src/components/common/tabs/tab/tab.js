import React from 'react';
import PropTypes from 'prop-types';
import styles from './tab.module.scss';

function Tab({ children }) {
  return <div className={styles.tab}>{children}</div>;
}

Tab.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Tab;
