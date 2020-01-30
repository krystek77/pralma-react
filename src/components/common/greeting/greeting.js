import React from 'react';
import PropTypes from 'prop-types';

import styles from './greeting.module.scss';
import { UserConsumer, CONTEXT_OBSERVABLE_MAP } from '../../../user-context';

function Greeting({ disabled }) {
  let greetingClass = `${styles.greeting}`;

  if (disabled) {
    greetingClass = `${styles.greeting} ${styles['greeting-disabled']}`;
  }

  return (
    <UserConsumer unstable_observedBits={CONTEXT_OBSERVABLE_MAP.name}>
      {({ name }) => (
        <div className={greetingClass}>
          <span className={styles.greeting__word}>Witaj </span>
          <span className={styles.greeting__name}>{name}</span>
        </div>
      )}
    </UserConsumer>
  );
}

Greeting.propTypes = {
  disabled: PropTypes.bool,
};
Greeting.defaultProps = {
  disabled: false,
};
export default Greeting;
