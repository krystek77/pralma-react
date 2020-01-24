import React from 'react';
import styles from './consumption.module.scss';

import Picture from '../../../common/picture';
import UnorderedList from '../../../common/unorderedList';
import ListItem from '../../../common/unorderedList/listItem';
import Profit from '../../../common/profit';
import ButtonLink from '../../../common/buttonLink';

function Consumption() {
  return (
    <article className={styles.consumption}>
      <div className={styles.conatiner}>
        <h3 className={styles.title}>Optymalizacja kosztów</h3>

        <p className={styles.description}>
          Water and energy use are a huge concerns for every stakeholder and
          client in the industry. With this in mind, the FX Line has been
          designed to achieve extremely low water and energy consumption. FX
          washer-extractors are standard equipped with revolutionary CASCADE TM
          DRUM
        </p>
        <div className={styles.grid}>
          <Picture alt='Cascade drum' width={320} />

          <div className={styles['group-items']}>
            <Profit value={25} label="Mniejsza wigotność resztkowa" />
            <Profit
              value={20}
              label="Mniejsze zużycie energii w procesie suszenia"
            />
          </div>

          <Picture alt='Cascade drum' width={320} />
        </div>

        <h4 className={`${styles.title} ${styles['title-second']}`}>
          PRIMUS introduces the unique CASCADE TM DRUM
        </h4>

        <p className={styles.description}>
          The CASCADE DRUM concept results in more perforations in the drum over
          the same surface area – so water extraction is much more efficient
          without your linen sticking to the drum, thus simplifying unloading.
          The CASCADE shape of the drum holes provides an extra mechanical
          action that produces an even better washing result
        </p>

        <UnorderedList>
          <ListItem text='Simpler unloading, as your linen does not stick to the drum' />
          <ListItem text='Maximum water extraction, thanks to more perforations in the drum over the same surface' />
          <ListItem text='Less residual moisture, due to the inclination of the bulges that extracts even more water.' />
          <ListItem text='Better washing performance, achieved by the specific shape of the bulges that provide an extra mechanical action' />
        </UnorderedList>

        <Profit value={15} label="Mniejsze zużycie wody" />

        <ButtonLink path='/produkty' label='Zobacz produkty' />
      </div>
    </article>
  );
}

export default Consumption;
