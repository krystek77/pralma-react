import React from 'react';
import PropTypes from 'prop-types';
import CardContact from './cardContact';

function CardsContact({ cards }) {
  return (
    <>
      {cards.map(card => {
        return <CardContact card={card} key={card.id} />;
      })}
    </>
  );
}

CardsContact.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
};

CardsContact.defaultProps = {
  cards: [],
};
export default CardsContact;
