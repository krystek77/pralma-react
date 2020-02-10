import React from 'react';
import { FaMobileAlt, FaEnvelope } from 'react-icons/fa';
import styles from './address.module.scss';

function Address() {
  return (
    <div className={styles.address}>
      <div className={styles.address__company}>
        <p className={styles.address__name}>
          Przedsiębiorstwo Produkcji Urządzeń Pralniczych &quot;Pralma&quot; sp.
          z o.o.
        </p>
        <p className={styles.address__street}>
          25-651 Kielce, ul. Górnicza 49a
        </p>
      </div>
      <div className={styles.address__registers}>
        <p className={styles.address__register}>
          <span className={styles.mark}>KRS:</span>0000022564
        </p>
        <p className={styles.address__register}>
          <span className={styles.mark}>NIP:</span>657-008-11-16
        </p>
        <p className={styles.address__register}>
          <span className={styles.mark}>Regon:</span>290022092
        </p>
        <p className={styles.address__register}>
          <span className={styles.mark}>KONTO:</span>54 8493 0004 0010 0079
          2149 0001
        </p>
      </div>
      <div className={styles.address__contacts}>
        <p className={styles.address__contact}>
          <span className={styles.mark}>tel.:</span>+48 41 345 38 56
        </p>
        <p className={styles.address__contact}>
          <span className={styles.mark}>tel./fax:</span>+48 41 34 505 61
        </p>
        <p className={styles.address__contact}>
          <span className={styles.mark}>e-mail:</span>
          <a className={styles.email} href='mailto:biuro@pralma.pl'>
            biuro@pralma.pl
          </a>
        </p>
      </div>
      <div className={styles.address__departments}>
        <div className={styles.address__department}>
          <p className={styles['address__name-department']}>Sprzedaż</p>
          <p className={styles['address__contact-department']}>
            <FaMobileAlt className={styles.icon} />
            +48 41 602 191 607
          </p>
          <p className={styles['address__contact-department']}>
            <FaEnvelope className={styles.icon} />
            <a className={styles.email} href='mailto:k.wrona@pralma.pl'>
              k.wrona@pralma.pl
            </a>
          </p>
        </div>
        <div className={styles.address__department}>
          <p className={styles['address__name-department']}>Serwis</p>
          <p className={styles['address__contact-department']}>
            <FaMobileAlt className={styles.icon} />
            +48 41 664 962 002
          </p>
          <p className={styles['address__contact-department']}>
            <FaEnvelope className={styles.icon} />
            <a className={styles.email} href='mailto:serwis@pralma.pl'>
              serwis@pralma.pl
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Address;
