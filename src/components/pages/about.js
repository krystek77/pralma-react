import React from 'react';
import Layout from '../common/layout';
import Hero from '../common/hero';

function AboutUsPage() {
  return (
    <Layout>
      <Hero
        heroClass={['hero-about']}
        alt='Okładka strony o nas'
        label='O nas'
        title='Producent przemysłowych urządzeń pralniczych oraz dystrybutor maszyn marki Primus'
        description='Globally maximize innovative functionalities after dynamic
          partnerships. Holisticly deliver prospective web-readiness rather than
          integrated quality vectors. Authoritatively parallel task low-risk
          high-yield e-tailers for real-time niche.'
      />
    </Layout>
  );
}
export default AboutUsPage;
