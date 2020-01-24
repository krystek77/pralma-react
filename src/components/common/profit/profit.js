import React from 'react';
import PropTypes from 'prop-types';
import styles from './profit.module.scss';

function Profit({ value, label }) {
  return (
    <div className={styles.profit}>
      <span className={styles.profit__value}>{value}%</span>
      <strong className={styles.profit__label}>{label}</strong>
    </div>
  );
}

Profit.propTypes = {
  value: PropTypes.number,
  label: PropTypes.string,
};
Profit.defaultProps = {
  value: '0',
  label: 'default label',
};

export default Profit;
