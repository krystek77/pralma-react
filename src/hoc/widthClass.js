import React from 'react';
import styles from './withClass.module.scss';

function withClass(WrappedComponent, className) {
  return props => (
    <div className={styles[className]}>
      <WrappedComponent {...props} />
    </div>
  );
}

export default withClass;
