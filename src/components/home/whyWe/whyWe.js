import React from 'react';
import styles from './whyWe.module.scss';

import Title from '../../common/title';
import Tabs from '../../common/tabs';
import Tab from '../../common/tabs/tab';

import Consumption from './consumption';
import Performance from './performance';
import Ergonomic from './ergonomic';
import EcoFriendly from './ecofriendly';

function WhyWe() {
  return (
    <section className={styles['why-we']}>
      <div className={styles.container}>
        <Title title='Dlaczego Pralma' />
        <Tabs>
          <Tab titleTab='Niskie koszty'>
            <Consumption />
          </Tab>
          <Tab titleTab='Wysoka wydajność'>
            <Performance />
          </Tab>
          <Tab titleTab='Elegancja i ergonomia'>
            <Ergonomic />
          </Tab>
          <Tab titleTab='Przyjazne dla środowiska'>
            <EcoFriendly />
          </Tab>
        </Tabs>
      </div>
    </section>
  );
}

export default WhyWe;
