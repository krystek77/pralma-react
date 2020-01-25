import React from 'react';
import styles from './why.module.scss';

import Title from '../../common/title';
import Tabs from '../../common/tabs';
import Tab from '../../common/tabs/tab';

import Consumption from './consumption';
import Performance from './performance';
import Ergonomic from './ergonomic';
import EcoFriendly from './ecofriendly';

function Why() {
  return (
    <section className={styles.why}>
      <div className={styles.container}>
        <Title text="Dlaczego Pralma" level="lvl-2" />
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

export default Why;
