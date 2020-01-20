import React from 'react';
import { Link } from 'react-router-dom';

import styles from './logo.module.scss';
import LogoImage from '../../../assets/images/logopralma.png';

function Logo() {
  return (
    <Link to='/' className={styles.logo}>
      <img
        className={styles.logo__image}
        src={LogoImage}
        alt='Logo Przedsiębiorstwa Produkcji Urządzeń Pralniczych Pralma sp. z o.o.'
      />
    </Link>
  );
}
export default Logo;
