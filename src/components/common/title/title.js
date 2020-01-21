import React from 'react';
import PropTypes from 'prop-types';
import styles from './title.module.scss';

export default function Title({ title }) {
  return <h2 className={styles.title}>{title}</h2>;
}
Title.propTypes = {
  title: PropTypes.string,
};
Title.defaultProps = {
  title: 'Default title',
};
