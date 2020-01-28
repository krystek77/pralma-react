import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './logo.module.scss';
import LogoImage from '../../../assets/images/logopralma.png';

function Logo({ logoClass }) {
  return (
    <Link to='/' className={`${styles.logo} ${styles[logoClass]}`}>
      <img
        className={styles.logo__image}
        src={LogoImage}
        alt='Logo Przedsiębiorstwa Produkcji Urządzeń Pralniczych Pralma sp. z o.o.'
      />
    </Link>
  );
}

Logo.propTypes = {
  logoClass: PropTypes.string,
};

Logo.defaultProps = {
  logoClass: 'logo',
};
export default Logo;
