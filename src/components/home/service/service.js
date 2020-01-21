import React from 'react';

import { AiFillCar, AiFillProject, AiFillTool } from 'react-icons/ai';
import { MdSchool } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';
import Title from '../../common/title';
import styles from './service.module.scss';

const services = [
  {
    id: 1,
    title: 'Projekt wyposażenia pralni',
    info:
      'Efficiently disintermediate revolutionary niche markets for e-business processes. Collaboratively scale B2B human capital before resource sucking manufactured products. Continually maximize global benefits after vertical vortals.',
    icon: <AiFillProject />,
  },
  {
    id: 2,
    title: 'Dostawa',
    info:
      'Efficiently disintermediate revolutionary niche markets for e-business processes. Collaboratively scale B2B human capital before resource sucking manufactured products. Continually maximize global benefits after vertical vortals.',
    icon: <AiFillCar />,
  },
  {
    id: 3,
    title: 'Montaż',
    info:
      'Efficiently disintermediate revolutionary niche markets for e-business processes. Collaboratively scale B2B human capital before resource sucking manufactured products. Continually maximize global benefits after vertical vortals.',
    icon: <AiFillTool />,
  },
  {
    id: 4,
    title: 'Szkolenie',
    info:
      'Efficiently disintermediate revolutionary niche markets for e-business processes. Collaboratively scale B2B human capital before resource sucking manufactured products. Continually maximize global benefits after vertical vortals.',
    icon: <MdSchool />,
  },
  {
    id: 5,
    title: 'Finansowanie',
    info:
      'Efficiently disintermediate revolutionary niche markets for e-business processes. Collaboratively scale B2B human capital before resource sucking manufactured products. Continually maximize global benefits after vertical vortals.',
    icon: <GiReceiveMoney />,
  },
];

function Service() {
  return (
    <section className={styles.service}>
      <div className={styles.container}>
        <Title title='Nasze usługi' />
        {services.map(service => {
          const cardClass = `service-card-${service.id}`;
          return (
            <div key={service.id} className={styles['service-card']}>
              <div
                className={`${styles['service-card__icon']} ${styles[cardClass]}`}>
                {service.icon}
              </div>
              <div className={styles['service-card__description']}>
                <h3 className={styles['service-card__title']}>
                  {service.title}
                </h3>
                <p className={styles['service-card__info']}>{service.info}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Service;
