import React from 'react';
import styles from './content.module.scss';
import defaultImage from '../../../../assets/images/home/whywe_default.png';

function Content() {
  return (
    <article className={styles.article}>
      <h4 className={styles.article__title}>
        Optymalizacja kosztów mediów i eksploatacji
      </h4>
      <div className={styles.article__content}>
        <div className={styles.article__image}>
          <img src={defaultImage} alt='' className={styles.image} />
        </div>
        <div className={styles.article__text}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis maxime mollitia eaque iusto saepe quis incidunt expedita
            tenetur quam necessitatibus impedit repellat ducimus minus, sint
            nobis! Quae vitae esse doloremque?
          </p>
        </div>
      </div>
    </article>
  );
}
export default Content;
