import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaWpforms } from 'react-icons/fa';
import Logo from '../logo';
import CardsContact from './cardsContact';
import styles from './shortContact.module.scss';

const cards = [
  {
    id: 1,
    label: 'Kontakt',
    title: 'Zapytaj o wycenę',
    path: '#',
    icon: <FaWpforms />,
  },
  {
    id: 2,
    label: 'Zadzwoń',
    title: '+48 41 345 05 61',
    path: '#',
    icon: <FaPhone />,
  },
  {
    id: 3,
    label: 'Siedziba',
    title: 'Odwiedź nas',
    path: '#',
    icon: <FaMapMarkerAlt />,
  },
];

function ShortContact() {
  return (
    <div className={styles['short-contact']}>
      <div className={styles.container}>
        <Logo />
        <CardsContact cards={cards} />
      </div>
    </div>
  );
}

export default ShortContact;
