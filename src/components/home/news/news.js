import React from 'react';
import { Link } from 'react-router-dom';
import { FaPencilAlt } from 'react-icons/fa';
import styles from './news.module.scss';

import Title from '../../common/title';
import Description from '../../common/description';

function NewsSection() {
  return (
    <section className={styles.news}>
      <div className={styles.container}>
        <Title text="Z ostatniej chwili" level="lvl-2" />
        <div className={styles['news-cards']}>
          <Link to='/z-ostatniej-chwili' className={styles['news-card']}>
            <div className={styles['news-card__date']}>
              <span className={styles['news-card__day']}>12</span>
              <span className={styles['news-card__month']}>grudzień, 2019</span>
            </div>
            <div className={styles['news-card__icon']}>
              <FaPencilAlt className={styles.icon} />
            </div>
            <Description
              descriptionClass="description--news-card"
              text="With proper installation and a routine maintenance schedule, your commercial laundry equipment should be relatively">
              <Title
                text="What to Do When Your Commercial Laundry Equipment Breaks Down"
                level="lvl-3"
              />
              <span className={styles.tag}>Felieton</span>
            </Description>
          </Link>

          <Link to='/z-ostatniej-chwili' className={styles['news-card']}>
            <div className={styles['news-card__date']}>
              <span className={styles['news-card__day']}>11</span>
              <span className={styles['news-card__month']}>luty, 2020</span>
            </div>
            <div className={styles['news-card__icon']}>
              <FaPencilAlt className={styles.icon} />
            </div>
            <Description
              descriptionClass="description--news-card"
              text="With proper installation and a routine maintenance schedule, your commercial laundry equipment should be relatively">
              <Title
                text="What to Do When Your Commercial Laundry Equipment Breaks Down"
                level="lvl-3"
              />
              <span className={styles.tag}>Nowość</span>
            </Description>
          </Link>
          <Link to='/z-ostatniej-chwili' className={styles['news-card']}>
            <div className={styles['news-card__date']}>
              <span className={styles['news-card__day']}>16</span>
              <span className={styles['news-card__month']}>styczeń, 2020</span>
            </div>
            <div className={styles['news-card__icon']}>
              <FaPencilAlt className={styles.icon} />
            </div>
            <Description
              descriptionClass="description--news-card"
              text="With proper installation and a routine maintenance schedule, your commercial laundry equipment should be relatively">
              <Title
                text="What to Do When Your Commercial Laundry Equipment Breaks Down"
                level="lvl-3"
              />
              <span className={styles.tag}>Wiadomość</span>
            </Description>
          </Link>

          <Link to='/z-ostatniej-chwili' className={styles['news-card']}>
            <div className={styles['news-card__date']}>
              <span className={styles['news-card__day']}>03</span>
              <span className={styles['news-card__month']}>styczeń, 2020</span>
            </div>
            <div className={styles['news-card__icon']}>
              <FaPencilAlt className={styles.icon} />
            </div>
            <Description
              descriptionClass="description--news-card"
              text="With proper installation and a routine maintenance schedule, your commercial laundry equipment should be relatively">
              <Title
                text="What to Do When Your Commercial Laundry Equipment Breaks Down"
                level="lvl-3"
              />
              <span className={styles.tag}>Promocja</span>
            </Description>
          </Link>
          <Link to='/z-ostatniej-chwili' className={styles['news-card']}>
            <div className={styles['news-card__date']}>
              <span className={styles['news-card__day']}>03</span>
              <span className={styles['news-card__month']}>styczeń, 2020</span>
            </div>
            <div className={styles['news-card__icon']}>
              <FaPencilAlt className={styles.icon} />
            </div>
            <Description
              descriptionClass="description--news-card"
              text="With proper installation and a routine maintenance schedule, your commercial laundry equipment should be relatively">
              <Title
                text="The Difference Between Price Vs. Cost in Your Laundry Equipment"
                level="lvl-3"
              />
              <span className={styles.tag}>Nowość</span>
            </Description>
          </Link>
          <Link to='/z-ostatniej-chwili' className={styles['news-card']}>
            <div className={styles['news-card__date']}>
              <span className={styles['news-card__day']}>03</span>
              <span className={styles['news-card__month']}>styczeń, 2020</span>
            </div>
            <div className={styles['news-card__icon']}>
              <FaPencilAlt className={styles.icon} />
            </div>
            <Description
              descriptionClass="description--news-card"
              text="With proper installation and a routine maintenance schedule, your commercial laundry equipment should be relatively">
              <Title
                text="The Difference Between Price Vs. Cost in Your Laundry Equipment"
                level="lvl-3"
              />
              <span className={styles.tag}>Wydarzenie</span>
            </Description>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
