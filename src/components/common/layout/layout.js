import React from 'react';
import PropTypes from 'prop-types';

import SEO from '../seo';
import Menu from '../menu';
import ShortContact from '../shortContact';

function Layout({ children }) {
  return (
    <>
      <SEO />
      <Menu />
      <ShortContact />
      {children}
      <div>Footer</div>
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
