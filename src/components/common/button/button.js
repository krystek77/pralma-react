import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

function Button({
  type,
  label,
  handleClickButton,
  children,
  active,
  disabled,
}) {
  let buttonClass = '';

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
   * They are diffrent buttons. Eslint configuration forbids reset buttons because they are horribly bad fo UX
   */

  const renderedButton =
    type === 'button' ? (
      <button type='button' className={buttonClass} onClick={handleClickButton}>
        <span className={styles.btn__icon}>{children}</span>
        <span className={styles.btn__label}>{label}</span>
      </button>
    ) : (
      <button type='submit' className={buttonClass} onClick={handleClickButton}>
        <span className={styles.btn__icon}>{children}</span>
        <span className={styles.btn__label}>{label}</span>
      </button>
    );

  return renderedButton;
}

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  label: PropTypes.string.isRequired,
  handleClickButton: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
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
