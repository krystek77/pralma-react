import React from 'react';
import PropTypes from 'prop-types';
import styles from './customerLinks.module.scss';

function CustomerLinks({ children }) {
  return (
    <aside className={styles['customer-links']}>
      <div className={styles.container}>{children}</div>
      {/* {children} */}
    </aside>
  );
}

CustomerLinks.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CustomerLinks;
