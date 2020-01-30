import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import styles from './greeting.module.scss';
import { UserContext } from '../../../user-context';

function Greeting({ disabled }) {
  const userContext = useContext(UserContext);
  let greetingClass = `${styles.greeting}`;

  if (disabled) {
    greetingClass = `${styles.greeting} ${styles['greeting-disabled']}`;
  }

  return (
    <div className={greetingClass}>
      <span className={styles.greeting__word}>Witaj </span>
      <span className={styles.greeting__name}>{userContext.name}</span>
    </div>
  );
}

Greeting.propTypes = {
  disabled: PropTypes.bool,
};
Greeting.defaultProps = {
  disabled: false,
};
export default Greeting;
