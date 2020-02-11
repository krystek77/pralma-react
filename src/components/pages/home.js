import React from 'react';
import Layout from '../common/layout';
import Hero from '../common/hero';
import ServiceSection from '../home/service';
import WhySection from '../home/why';
import NewsSection from '../home/news';
import Technology from '../home/technology';
import bgImage from '../../assets/images/home/bg_hero_primus_dark-min.png';
import { ActionButton } from '../common/buttonLink';

function HomePage() {
  return (
    <Layout>
      <Hero
        heroClass={['hero-home']}
        img={bgImage}
        alt='Okładka strony głównej'
        label='Pralma'
        title='Innowacyjne podejście do pralni przemysłowej'
        description='Globally maximize innovative functionalities after dynamic
          partnerships. Holisticly deliver prospective web-readiness rather than
          integrated quality vectors. Authoritatively parallel task low-risk
          high-yield e-tailers for real-time niche.'>
        <ActionButton path='/produkty' label='Poznaj produkty' />
      </Hero>
      <Technology />
      <WhySection />
      <ServiceSection />
      <NewsSection />
    </Layout>
  );
}

export default HomePage;
