import React from 'react';
import styles from './whyWe.module.scss';

import Title from '../../common/title';
import Tabs from '../../common/tabs';
import Tab from '../../common/tabs/tab';

function WhyWe() {
  return (
    <section className={styles['why-we']}>
      <div className={styles.container}>
        <Title title='Dlaczego Pralma' />
        <Tabs>
          <Tab titleTab='Niskie koszty'>
            <div>--- tab content 0 ---</div>
          </Tab>
          <Tab titleTab='Wysoka wydajność'>
            <div>--- tab content 1 ---</div>
          </Tab>
          <Tab titleTab='Elegancja i ergonomia'>
            <div>--- tab content 2 ---</div>
          </Tab>
          <Tab titleTab='Przyjazne dla środowiska'>
            <div>--- tab content 3 ---</div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
}

export default WhyWe;
