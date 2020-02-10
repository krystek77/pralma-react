import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import styles from './customerCard.module.scss';

function CustomerCard({ path, children }) {
  return (
    <Link to={path} className={styles['customer-card']}>
      {children}
    </Link>
  );
}

CustomerCard.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
export default CustomerCard;
