import React from 'react';
import PropTypes from 'prop-types';
import styles from './labelList.module.scss';

export default function LabelList({ label }) {
  return <span className={styles['label-list']}>{label}</span>;
}

LabelList.propTypes = {
  label: PropTypes.string.isRequired,
};
