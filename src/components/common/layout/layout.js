import React from 'react';
import PropTypes from 'prop-types';
import styles from './layout.module.scss';

import SEO from '../seo';
import Menu from '../menu';
import ShortContact from '../shortContact';
import Footer from '../footer';

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <SEO />
      <Menu />
      <ShortContact />
      <div className={styles.content}>{children} -- children --</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
