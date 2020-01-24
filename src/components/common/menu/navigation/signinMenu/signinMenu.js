import React from 'react';
import { GoSignIn } from 'react-icons/go';
import { FaRegUser } from 'react-icons/fa';
import styles from './signinMenu.module.scss';
import ButtonLink from '../../../buttonLink';

function SigninMenu() {
  return (
    <ul className={styles.signinMenu}>
      <li className={styles.signinMenu__item}>
        <ButtonLink path='/logowanie' label='zaloguj' fullMenu>
          <GoSignIn />
        </ButtonLink>
      </li>
      <li className={styles.signinMenu__item}>
        <ButtonLink path='/rejestracja' label='zarejestruj' fullMenu>
          <FaRegUser />
        </ButtonLink>
      </li>
    </ul>
  );
}
export default SigninMenu;
