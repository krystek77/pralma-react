import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

function Button({ type, label, children, active, disabled }) {
  let buttonClass = '';
  let renderedButton = null;
  /**
   * if present active must be active
   * active -> active button
   * disabled -> disabled button
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
  /**
   * Beacause value type attribute of button should not be dynamic
   * They are diffrent buttons
   */

  switch (type) {
    case 'submit':
      renderedButton = (
        <button type='submit' className={buttonClass}>
          <span className={styles.btn__icon}>{children}</span>
          <span className={styles.btn__label}>{label}</span>
        </button>
      );
      break;
    default:
      renderedButton = (
        <span type='button' className={buttonClass}>
          <span className={styles.btn__icon}>{children}</span>
          <span className={styles.btn__label}>{label}</span>
        </span>
      );
  }

  return renderedButton;
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  children: null,
  active: false,
  disabled: false,
};
export default Button;
