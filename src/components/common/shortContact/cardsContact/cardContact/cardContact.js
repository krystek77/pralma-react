import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaQuestion } from 'react-icons/fa';
import styles from './cardContact.module.scss';

function CardContact({ card }) {
  return (
    <Link to={card.path} key={card} className={styles.card}>
      <div className={styles.card__icon}>{card.icon}</div>
      <div className={styles.card__description}>
        <p className={styles.card__title}>{card.title}</p>
        <p className={styles.card__label}>{card.label}</p>
      </div>
    </Link>
  );
}

CardContact.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
  }),
};

CardContact.defaultProps = {
  card: {
    id: 0,
    label: 'Default label',
    title: 'Default title',
    path: '#',
    icon: <FaQuestion />,
  },
};

export default CardContact;
