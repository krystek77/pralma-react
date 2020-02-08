import React from 'react';
import PropTypes from 'prop-types';
import styles from './hero.module.scss';
import bgDefault from '../../../assets/images/hero/bg_default.png';

import Title from '../title';

function Hero({ heroClass, img, alt, label, title, description, children }) {
  return (
    <header className={styles.hero}>
      <img className={styles.hero__background} src={img} alt={alt} />
      <div className={`${styles.container} ${styles[heroClass]}`}>
        <div className={styles.hero__banner}>
          <p className={styles.hero__label}>{label}</p>
          <Title text={title} level='lvl-1' />
          <p className={styles.hero__description}>{description}</p>
          {children}
        </div>
      </div>
    </header>
  );
}

Hero.propTypes = {
  heroClass: PropTypes.arrayOf(PropTypes.string),
  img: PropTypes.string,
  alt: PropTypes.string,
  label: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

Hero.defaultProps = {
  heroClass: ['hero-default'],
  img: bgDefault,
  alt: 'Default image description',
  label: 'Page label',
  title: 'Page title',
  description: 'Default page description',
  children: null,
};
export default Hero;
