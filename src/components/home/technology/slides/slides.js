import React from 'react';
import PropTypes from 'prop-types';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import styles from './slides.module.scss';

import Dot from './dot';
import { Next, Prev } from '../../../common/button';

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
      <div className={styles.slides}>
        <Next active>
          <MdNavigateNext />
        </Next>
        <Prev>
          <MdNavigateBefore />
        </Prev>
        {children}
      </div>
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
