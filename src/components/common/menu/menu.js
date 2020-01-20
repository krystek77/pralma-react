import React, { useState } from 'react';
import Social from './social';
import Navigation from './navigation';
import Hamburger from './hamburger';
import styles from './menu.module.scss';

function Menu() {
  const [state, setSate] = useState({ isOpen: false });

  function toggleHamburger() {
    setSate({ isOpen: !state.isOpen });
  }

  return (
    <div className={styles.menu}>
      <Social />
      <Navigation isOpen={state.isOpen} />
      <Hamburger isOpen={state.isOpen} handleHamburger={toggleHamburger} />
    </div>
  );
}
export default Menu;
