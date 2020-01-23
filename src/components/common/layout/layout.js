import React from 'react';
import PropTypes from 'prop-types';

import SEO from '../seo';
import Menu from '../menu';
import ShortContact from '../shortContact';
import Footer from '../footer';

function Layout({ children }) {
  return (
    <>
      <SEO />
      <Menu />
      <ShortContact />
      {children}
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
