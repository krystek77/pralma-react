import React from 'react';
import { GoSignOut } from 'react-icons/go';
import styles from './signoutMenu.module.scss';

import Button from '../../../button';
import Greeting from '../../../greeting';

function SignoutMenu() {
  return (
    <>
      <Greeting />
      <ul className={styles.signoutMenu}>
        <li className={styles.signoutMenu__item}>
          <Button type='button' label='wyloguj' fullMenu>
            <GoSignOut />
          </Button>
        </li>
      </ul>
    </>
  );
}

export default SignoutMenu;
