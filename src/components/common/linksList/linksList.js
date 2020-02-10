import React from 'react';
import PropTypes from 'prop-types';
import styles from './linksList.module.scss';

function LinksList({ children, linksListClass }) {
  const linksClass = `${styles['links-list']} ${styles[linksListClass]}`;
  return <ul className={linksClass}>{children}</ul>;
}

LinksList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.elementType),
  ]).isRequired,
  linksListClass: PropTypes.string,
};

LinksList.defaultProps = {
  linksListClass: 'links-list--default',
};

export default LinksList;
