import React from 'react';
import { Link } from 'react-router-dom';
import { GoSignIn } from 'react-icons/go';
import { FaRegUser } from 'react-icons/fa';
import styles from './signinMenu.module.scss';

function SigninMenu() {
  return (
    <ul className={styles.signinMenu}>
      <li className={styles.signinMenu__item}>
        <Link to='/signin' className={styles.signinMenu__link}>
          <GoSignIn className={styles.signinMenu__icon} />
          <span className={styles.signinMenu__label}>Zaloguj się</span>
        </Link>
      </li>
      <li className={styles.signinMenu__item}>
        <Link to='/signup' className={styles.signinMenu__link}>
          <FaRegUser className={styles.signinMenu__icon} />
          <span className={styles.signinMenu__label}>Zarejestruj się</span>
        </Link>
      </li>
    </ul>
  );
}
export default SigninMenu;
