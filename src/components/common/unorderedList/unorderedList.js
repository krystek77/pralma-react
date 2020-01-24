import React from 'react';
import PropTypes from 'prop-types';
import styles from './unorderedList.module.scss';

function UnorderedList({ children }) {
  return <ul className={styles.list}>{children}</ul>;
}
UnorderedList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default UnorderedList;
