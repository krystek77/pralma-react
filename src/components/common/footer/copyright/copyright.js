import React from 'react';
import styles from './copyright.module.scss';

function Copyright() {
  return (
    <div className={styles.copyright}>
      <p className={styles.copyright__text}>
        Copyright &copy; 2020 by Krystian Wrona. All rights reserved.
      </p>
    </div>
  );
}
export default Copyright;
