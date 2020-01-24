import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './buttonLink.module.scss';

function ButtonLink({ path, label, children, active, disabled }) {
  let buttonClass = '';
  /**
   * if present active must be active
   * active -> active link
   * disabled -> disabled link
   * active disabled -> active
   * disabled active -> active
   *
   */
  if (active) {
    buttonClass = `${styles.btn} ${styles['btn-active']}`;
  } else if (disabled) {
    buttonClass = `${styles.btn} ${styles['btn-disabled']}`;
  } else {
    buttonClass = `${styles.btn}`;
  }
  return (
    <Link to={path} className={buttonClass}>
      <span className={styles.btn__icon}>{children}</span>
      <span className={styles.btn__label}>{label}</span>
    </Link>
  );
}

ButtonLink.propTypes = {
  path: PropTypes.string,
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};

ButtonLink.defaultProps = {
  path: '/a',
  children: null,
  active: false,
  disabled: false,
};
export default ButtonLink;
