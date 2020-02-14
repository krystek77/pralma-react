import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './breadcrump.module.scss';

function BreadCrump({ title, url }) {
  let path = '';

  return (
    <div className={styles.breadcrump}>
      <div className={styles.container}>
        <p className={styles.breadcrump__title}>{title}</p>
        <div className={styles.breadcrump__links}>
          {url.split('/').map(item => {
            if (item === '')
              return (
                <Link
                  className={styles.breadcrump__link}
                  activeClassName={styles['breadcrump__link--active']}
                  exact
                  to="/"
                  key="home">
                  home
                </Link>
              );
            
              path += `/${item}`;
              return (
                <Link
                  className={styles.breadcrump__link}
                  activeClassName={styles['breadcrump__link--active']}
                  exact
                  to={path}
                  key={item}>
                  {item}
                </Link>
              );
            
          })}
        </div>
      </div>
    </div>
  );
}
BreadCrump.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default BreadCrump;
