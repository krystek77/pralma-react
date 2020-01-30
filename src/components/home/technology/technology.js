import React from 'react';
import Title from '../../common/title';
import styles from './technology.module.scss';

function Technology() {
  return (
    <section className={styles.technology}>
      <Title level="lvl-2" text="Innowacyjne technologie" />
      <div>---content ---</div>
    </section>
  );
}

export default Technology;
