import React from 'react';
import PropTypes from 'prop-types';
import styles from './customerCards.module.scss';

function CustomerCards({ children }) {
  return <div className={styles['customer-cards']}>{children}</div>;
}

CustomerCards.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
export default CustomerCards;
