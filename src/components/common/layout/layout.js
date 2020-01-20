import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import Menu from '../menu';

function Layout({ children }) {
  return (
    <>
      {/** SEO */}
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='description' content='' />
        <meta name='keywords' content='' />
        <meta name='author' content='Krystian Wrona' />
        <title>
          Przedsiębiorstwo Produkcji Urządzeń Pralniczych Pralma sp. z o.o.
        </title>
      </Helmet>
      {/** menu */}
      <Menu />
      {/** hero */}
      {children}
      {/** footer */}
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
