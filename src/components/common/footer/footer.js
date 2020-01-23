import React from 'react';
import PropTypes from 'prop-types';
import styles from './footer.module.scss';

function Footer({ children }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>{children}</div>
    </footer>
  );
}

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default Footer;
