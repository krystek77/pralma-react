import React from 'react';
import PropTypes from 'prop-types';
import styles from './linksList.module.scss';

function LinksList({ children }) {
  return <ul className={styles['links-list']}>{children}</ul>;
}

LinksList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.elementType),
  ]).isRequired,
};

export default LinksList;
