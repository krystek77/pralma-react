import React from 'react';
import PropTypes from 'prop-types';
import styles from './title.module.scss';

export default function Title({ text, level }) {
  let header = null;
  /**
   * lvl - 1 render h1
   * lvl - 2 render h2
   * lvl - 3 render h3
   * lvl - 4 render h4
   * lvl - 5 render h5
   * lvl - 6 render h6
   * no level - render h1
   * other than above - render h1
   */
  switch (level) {
    case 'lvl-1':
      header = (
        <h1 className={`${styles.title} ${styles['title-lvl-1']}`}>
          {text}
        </h1>
      );
      break;
    case 'lvl-2':
      header = (
        <h2 className={`${styles.title} ${styles['title-lvl-2']}`}>
          {text}
        </h2>
      );
      break;
    case 'lvl-3':
      header = (
        <h3 className={`${styles.title} ${styles['title-lvl-3']}`}>
          {text}
        </h3>
      );
      break;
    case 'lvl-4':
      header = (
        <h4 className={`${styles.title} ${styles['title-lvl-4']}`}>
          {text}
        </h4>
      );
      break;
    case 'lvl-5':
      header = (
        <h5 className={`${styles.title} ${styles['title-lvl-5']}`}>
          {text}
        </h5>
      );
      break;
    case 'lvl-6':
      header = (
        <h6 className={`${styles.title} ${styles['title-lvl-6']}`}>
          {text}
        </h6>
      );
      break;
    default:
      header = (
        <h1 className={`${styles.title}} ${styles['title-lvl-1']}`}>
          {text}
        </h1>
      );
  }
  return header;
}
Title.propTypes = {
  text: PropTypes.string,
  level: PropTypes.string,
};
Title.defaultProps = {
  text: 'Default text of title',
  level: 'lvl-1',
};
