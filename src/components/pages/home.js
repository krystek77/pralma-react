import React from 'react';
import Layout from '../common/layout';
import Hero from '../common/hero';
import ServiceSection from '../home/service';
import WhyWeSection from '../home/whyWe';
import bgImage from '../../assets/images/hero/bg_home.png';

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
          high-yield e-tailers for real-time niche.'
      />
      <WhyWeSection />
      <ServiceSection />
    </Layout>
  );
}

export default HomePage;
