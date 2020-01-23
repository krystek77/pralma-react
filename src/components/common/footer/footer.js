import React from 'react';
import styles from './footer.module.scss';
import Copyright from './copyright';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Copyright />
      </div>
    </footer>
  );
}

export default Footer;
