import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './buttonLink.module.scss';
import withClass from '../../../hoc/widthClass';

function ButtonLink({ path, label, children, disabled, fullMenu }) {
  let buttonClass = '';

  buttonClass = disabled
    ? `${styles.btn} ${styles['btn-disabled']}`
    : `${styles.btn}`;

  // `${styles['red']} ${styles['green']}`

  buttonClass = fullMenu
    ? buttonClass
        .split(' ')
        .concat(`${styles['btn-fullmenu']}`)
        .join(' ')
    : buttonClass;

  return (
    <Link
      to={path}
      className={buttonClass}
      activeClassName={styles['btn-active']}>
      <span className={styles.btn__icon}>{children}</span>
      <span className={styles.btn__label}>{label}</span>
    </Link>
  );
}

ButtonLink.propTypes = {
  path: PropTypes.string,
  label: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
  disabled: PropTypes.bool,
  fullMenu: PropTypes.bool,
};

ButtonLink.defaultProps = {
  path: '/a',
  children: null,
  disabled: false,
  fullMenu: false,
};

export const ActionButton = withClass(ButtonLink, 'action-btn');
export default ButtonLink;
