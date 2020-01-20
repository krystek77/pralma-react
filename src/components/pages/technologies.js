import React from 'react';
import Layout from '../common/layout';
import Hero from '../common/hero';
import bgImage from '../../assets/images/hero/bg_technologies.png';

function TechnologiesPage() {
  return (
    <Layout>
      <Hero
        heroClass={['hero-technologies']}
        img={bgImage}
        alt='Okładka strony technologie'
        label='Technologie'
        title='Nowoczesne pralnie przemysłowe korzystają z najnowszych technologii'
        description='Globally maximize innovative functionalities after dynamic
          partnerships. Holisticly deliver prospective web-readiness rather than
          integrated quality vectors. Authoritatively parallel task low-risk
          high-yield e-tailers for real-time niche.'
      />
    </Layout>
  );
}

export default TechnologiesPage;
