import React from 'react';
import PropTypes from 'prop-types';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import styles from './social.module.scss';


function Social({ socialClass }) {
  return (
    <div className={`${styles.social} ${styles[socialClass]}`}>
      <a
        href='http://pl-pl.facebook.com/'
        className={styles.social__item}
        rel='noopener noreferrer'
        target='_blank'>
        <FaFacebookF className={styles.social__icon} />
      </a>
      <a
        href='http://www.twitter.com'
        className={styles.social__item}
        rel='noopener noreferrer'
        target='_blank'>
        <FaTwitter className={styles.social__icon} />
      </a>
      <a
        href='http://www.youtube.pl'
        className={styles.social__item}
        rel='noopener noreferrer'
        target='_blank'>
        <FaYoutube className={styles.social__icon} />
      </a>
    </div>
  );
}

Social.propTypes = {
  socialClass: PropTypes.arrayOf(PropTypes.string),
};

Social.defaultProps = {
  socialClass: ['social-default'],
};
export default Social;
