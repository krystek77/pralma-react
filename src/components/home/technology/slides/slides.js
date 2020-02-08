import React from 'react';
import PropTypes from 'prop-types';
import styles from './slides.module.scss';

import Dot from './dot';

function Slides({ children }) {
  function renderDots() {
    return (
      <div className={styles.dots}>
        {React.Children.map(children, (dot, index) => {
          const tempKey = index;
          return <Dot key={tempKey} />;
        })}
      </div>
    );
  }
  return (
    <>
      <div className={styles.slides}>{children}</div>
      {renderDots()}
    </>
  );
}

Slides.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
export default Slides;
