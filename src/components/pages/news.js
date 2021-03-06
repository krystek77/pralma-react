import React from 'react';
import Layout from '../common/layout';
import Hero from '../common/hero';
import bgImage from '../../assets/images/news/bg_hero_pralma_grey-min.png';

function NewsPage() {
  return (
    <Layout>
      <Hero
        heroClass={['hero-news']}
        img={bgImage}
        alt='Okładka strony wiadomości'
        label='Z ostatniej chwili'
        title='Bądź na bieżąco z najnowszymi rozwiązaniami i wiadomościami w branży'
        description='Globally maximize innovative functionalities after dynamic
          partnerships. Holisticly deliver prospective web-readiness rather than
          integrated quality vectors. Authoritatively parallel task low-risk
          high-yield e-tailers for real-time niche.'
      />
    </Layout>
  );
}
export default NewsPage;
