import React from 'react';
import PropTypes from 'prop-types';
import styles from './tab.module.scss';

function Tab({ children }) {
  return <article className={styles.tab}>{children}</article>;
}

Tab.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Tab;
