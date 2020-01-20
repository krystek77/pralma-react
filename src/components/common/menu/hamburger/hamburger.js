import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai';
import styles from './hamburger.module.scss';


function Hamburger({ isOpen, handleHamburger }) {
  return (
    <button
      className={styles.hamburger}
      type='button'
      onClick={handleHamburger}>
      {isOpen ? (
        <AiOutlineMenuUnfold className={styles.hamburger__icon} />
      ) : (
        <AiOutlineMenuFold className={styles.hamburger__icon} />
      )}
    </button>
  );
}

Hamburger.propTypes = {
  isOpen: PropTypes.bool,
  handleHamburger: PropTypes.func.isRequired,
};
Hamburger.defaultProps = {
  isOpen: false,
};
export default Hamburger;
