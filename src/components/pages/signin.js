import React from 'react';
import Layout from '../common/layout';
import Hero from '../common/hero';
import bgImage from '../../assets/images/hero/bg_products.png';

function SigninPage() {
  return (
    <Layout>
      <Hero
        heroClass={['hero-login']}
        img={bgImage}
        alt='Okładka strony logowanie'
        label='Logowanie'
        title='Logowanie do strony'
        description='Dramatically repurpose distinctive convergence before backward-compatible "outside the box" thinking. Energistically supply high-quality action items for clicks-and-mortar experiences. Dramatically actualize multimedia based portals.'
      />
    </Layout>
  );
}
export default SigninPage;
