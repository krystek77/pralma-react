import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './slide.module.scss';

function Slide({ children }) {
  return (
    <Link to='/technologie' className={styles.slide}>
      <div className={styles['inner-wrapper']}>{children}</div>
    </Link>
  );
}
Slide.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
Slide.defaultProps = {
  children: null,
};
export default Slide;
