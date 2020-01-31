import React from 'react';
import PropTypes from 'prop-types';
import styles from './dot.module.scss';

function Dot({ active }) {
  let dotClass = `${styles.dot}`;
  if (active) dotClass = `${styles.dot} ${styles['dot-active']}`;
  return (
    <span className={dotClass} role='button' aria-label='scroll to slide' />
  );
}
Dot.propTypes = {
  active: PropTypes.bool,
};
Dot.defaultProps = {
  active: false,
};
export default Dot;
