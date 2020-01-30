import React from 'react';
import PropTypes from 'prop-types';
import { GoSignOut } from 'react-icons/go';
import styles from './signoutMenu.module.scss';

import Button from '../../../button';
import Greeting from '../../../greeting';

function SignoutMenu({ isOpen }) {
  return (
    <>
      {isOpen ? null : <Greeting />}
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
SignoutMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
export default SignoutMenu;
