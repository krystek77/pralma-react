import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

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
      <div>
        MENU
        <ul>
          <li>
            <Link to='/'>Home </Link>
          </li>
          <li>
            <Link to='/produkty'>Products</Link>
          </li>
          <li>
            <Link to='/technologie'>Technologies</Link>
          </li>
        </ul>
      </div>
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
