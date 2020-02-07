import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styles from './mainMenu.module.scss';

function MainMenu() {
  return (
    <ul className={styles['main-menu']}>
      <li className={styles['main-menu__item']}>
        <Link
          to='/'
          className={styles['main-menu__link']}
          exact
          activeClassName={styles.active}>
          Home
        </Link>
      </li>
      <li className={styles['main-menu__item']}>
        <Link
          to='/klienci'
          className={styles['main-menu__link']}
          exact
          activeClassName={styles.active}>
          Klienci
        </Link>
      </li>
      <li className={styles['main-menu__item']}>
        <Link
          to='/produkty'
          className={styles['main-menu__link']}
          activeClassName={styles.active}>
          Produkty
        </Link>
      </li>
      <li className={styles['main-menu__item']}>
        <Link
          to='/technologie'
          className={styles['main-menu__link']}
          activeClassName={styles.active}>
          Technologie
        </Link>
      </li>
      <li className={styles['main-menu__item']}>
        <Link
          to='/o-nas'
          className={styles['main-menu__link']}
          activeClassName={styles.active}>
          O nas
        </Link>
      </li>
      <li className={styles['main-menu__item']}>
        <Link
          to='/z-ostatniej-chwili'
          className={styles['main-menu__link']}
          activeClassName={styles.active}>
          Wiadomości
        </Link>
      </li>
      <li className={styles['main-menu__item']}>
        <Link
          to='/kontakt'
          className={styles['main-menu__link']}
          activeClassName={styles.active}>
          Kontakt
        </Link>
      </li>
    </ul>
  );
}

export default MainMenu;
