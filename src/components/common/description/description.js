import React from 'react';
import PropTypes from 'prop-types';
import styles from './description.module.scss';

function Description({ text, descriptionClass, children }) {
  const descClass = `${styles.description__content} ${styles[descriptionClass]}`;

  return (
    <div className={styles.description}>
      {children}
      {text && <p className={descClass}>{text}</p>}
    </div>
  );
}

Description.propTypes = {
  text: PropTypes.string,
  descriptionClass: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};

Description.defaultProps = {
  text: '',
  descriptionClass: 'description--default',
  children: null,
};
export default Description;
