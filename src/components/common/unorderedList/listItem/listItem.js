import React from 'react';
import PropTypes from 'prop-types';
import styles from './listItem.module.scss';

function ListItem({ text }) {
  return <li className={styles.list__item}>{text}</li>;
}

ListItem.propTypes = {
  text: PropTypes.string,
};
ListItem.defaultProps = {
  text: 'default text of list item',
};

export default ListItem;
