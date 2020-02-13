import React from 'react';
import PropTypes from 'prop-types';
import styles from './picture.module.scss';
import defaultImage from '../../../assets/images/default_460_460.png';

function Picture({ src, alt, title, width }) {
  return (
    <div className={styles['image-wrapper']} style={{ maxWidth: `${width}px` }}>
      <img
        className={styles['image-wrapper__image']}
        src={src}
        title={title}
        alt={alt}
      />
    </div>
  );
}
Picture.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
};
Picture.defaultProps = {
  src: defaultImage,
  alt: 'Default description of image',
  title: 'Default title of image',
  width: 320,
};

export default Picture;
