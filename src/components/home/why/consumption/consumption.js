import React from 'react';
import styles from './consumption.module.scss';

import Title from '../../../common/title';
import Picture from '../../../common/picture';
import UnorderedList from '../../../common/unorderedList';
import ListItem from '../../../common/unorderedList/listItem';
import Profit from '../../../common/profit';
import ButtonLink from '../../../common/buttonLink';
import LabelList from '../../../common/labelList';

function Consumption() {
  return (
    <article className={styles.consumptionm}>
      <div className={styles.container}>
        {/** start of container */}
        {/** header */}
        <header className={styles.header}>
          <Title text='Optymalizacja kosztów' level='lvl-3' />
          <p className={styles.header__description}>
            Water and energy use are a huge concerns for every stakeholder and
            client in the industry. With this in mind, the FX Line has been
            designed to achieve extremely low water and energy consumption. FX
            washer-extractors are standard equipped with revolutionary CASCADE
            TM DRUM
          </p>
        </header>
        {/** main */}
        <div className={styles.main}>
          <Title
            text='PRIMUS introduces the unique CASCADE TM DRUM'
            level='lvl-4'
          />
          <div className={styles.content}>
            <aside className={styles.content__images}>
              <Picture alt='Cascade drum' width={320} />
              <Picture alt='Cascade drum' width={320} />
            </aside>
            <div className={styles.content__description}>
              <p className={styles.content__text}>
                The CASCADE DRUM concept results in more perforations in the
                drum over the same surface area – so water extraction is much
                more efficient without your linen sticking to the drum, thus
                simplifying unloading. The CASCADE shape of the drum holes
                provides an extra mechanical action that produces an even better
                washing result
              </p>
              <div className={styles.content__list}>
                <LabelList label='Korzyści' />
                <UnorderedList>
                  <ListItem text='Simpler unloading, as your linen does not stick to the drum' />
                  <ListItem text='Maximum water extraction, thanks to more perforations in the drum over the same surface' />
                  <ListItem text='Less residual moisture, due to the inclination of the bulges that extracts even more water.' />
                  <ListItem text='Better washing performance, achieved by the specific shape of the bulges that provide an extra mechanical action' />
                </UnorderedList>
              </div>

              <div className={styles.content__profits}>
                <Profit value={25} label='Mniejsza wigotność resztkowa' />
                <Profit
                  value={20}
                  label='Mniejsze zużycie energii w procesie suszenia'
                />
                <Profit value={15} label='Mniejsze zużycie wody' />
              </div>
            </div>
          </div>
        </div>
        {/** footer */}
        <footer className={styles.footer}>
          <ButtonLink path='/produkty' label='Zobacz produkty' />
        </footer>
        {/** end of container */}
      </div>
    </article>
  );
}

export default Consumption;
