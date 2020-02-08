import React from 'react';
import PropTypes from 'prop-types';
import styles from './pageContent.module.scss';

function PageContent({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles['page-content']}>{children}</div>
    </div>
  );
}

PageContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

export default PageContent;
