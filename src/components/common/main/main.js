import React from 'react';
import PropTypes from 'prop-types';
// import styles from './main.module.scss';

function Main({ children }) {
  return <main>{children}</main>;
}

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
Main.defaultProps = {
  children: null,
};
export default Main;
