import React from 'react';
import { GoSignOut } from 'react-icons/go';
import styles from './signoutMenu.module.scss';

import Button from '../../../button';
import Greeting from '../../../greeting';
import {
  UserConsumer,
  CONTEXT_OBSERVABLE_MAP,
} from '../../../../../user-context';

function SignoutMenu() {
  return (
    <>
      <Greeting />
      <ul className={styles.signoutMenu}>
        <li className={styles.signoutMenu__item}>
          <UserConsumer unstable_observedBits={CONTEXT_OBSERVABLE_MAP.logout}>
            {({ logout }) => (
              <Button
                type='button'
                label='wyloguj'
                handleClickButton={logout}
                fullMenu>
                <GoSignOut />
              </Button>
            )}
          </UserConsumer>
        </li>
      </ul>
    </>
  );
}

export default SignoutMenu;
