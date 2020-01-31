import React from 'react';
import styles from './technology.module.scss';

import Slides from './slides';
import Slide from './slides/slide';
import Title from '../../common/title';
import Picture from "../../common/picture";
import defaultTehcnologyImage from '../../../assets/images/technology/technology_thumble_260_160_default.png';

function Technology() {
  return (
    <section className={styles.technology}>
      <div className={styles.container}>
        <Title level='lvl-2' text='Innowacyjne technologie' />
        <Slides>
          <Slide>
            <Picture src={defaultTehcnologyImage} width={270} />
            <Title level="lvl-3" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              error corporis itaque ipsam, fuga voluptate pariatur explicabo
              doloribus magnam beatae perspiciatis delectus alias expedita sint
              repudiandae, distinctio sequi unde dolores.
            </p>
          </Slide>
          <Slide>
            <Picture src={defaultTehcnologyImage} width={270} />
            <Title level="lvl-3" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              error corporis itaque ipsam, fuga voluptate pariatur explicabo
              doloribus magnam beatae perspiciatis delectus alias expedita sint
              repudiandae, distinctio sequi unde dolores.
            </p>
          </Slide>
          <Slide>
            <Picture src={defaultTehcnologyImage} width={270} />
            <Title level="lvl-3" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              error corporis itaque ipsam, fuga voluptate pariatur explicabo
              doloribus magnam beatae perspiciatis delectus alias expedita sint
              repudiandae, distinctio sequi unde dolores.
            </p>
          </Slide>
          <Slide>
            <Picture src={defaultTehcnologyImage} width={270} />
            <Title level="lvl-3" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              error corporis itaque ipsam, fuga voluptate pariatur explicabo
              doloribus magnam beatae perspiciatis delectus alias expedita sint
              repudiandae, distinctio sequi unde dolores.
            </p>
          </Slide>
          <Slide>
            <Picture src={defaultTehcnologyImage} width={270} />
            <Title level="lvl-3" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              error corporis itaque ipsam, fuga voluptate pariatur explicabo
              doloribus magnam beatae perspiciatis delectus alias expedita sint
              repudiandae, distinctio sequi unde dolores.
            </p>
          </Slide>
        </Slides>
      </div>
    </section>
  );
}

export default Technology;
