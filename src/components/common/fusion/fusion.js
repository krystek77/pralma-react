import React from 'react';

import { IoIosContacts } from 'react-icons/io';
import { MdMessage } from 'react-icons/md';
import { GiAutoRepair } from 'react-icons/gi';
import { FaGifts } from 'react-icons/fa';
import styles from './fusion.module.scss';

function Fusion() {
  return (
    <section className={styles.fusion}>
      <div className={styles.container}>
        <div className={styles['fusion-inner']}>
          <div className={styles.fusion__item}>
            <FaGifts className={styles.icon} />
            <br />
            -- special offers --
          </div>
          <div className={styles.fusion__item}>
            <GiAutoRepair className={styles.icon} />
            <br />
            -- used machines --
          </div>
          <div className={styles.fusion__item}>
            <IoIosContacts className={styles.icon} />
            <br />
            -- contact us --
          </div>
          <div className={styles.fusion__item}>
            <MdMessage className={styles.icon} />
            <br />
            -- newsletter --
          </div>
        </div>
      </div>
    </section>
  );
}

export default Fusion;
