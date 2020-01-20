import React from 'react';
import Layout from '../common/layout';
import Hero from '../common/hero';
import bgImage from '../../assets/images/hero/bg_products.png';

function ProductsPage() {
  return (
    <Layout>
      <Hero
        heroClass={['hero-products']}
        img={bgImage}
        alt='Okładka strony produkty'
        label='Produkty'
        title='Pozwól sobie na stworzenie idealnej do potrzeb pralni przemysłowej'
        description='Globally maximize innovative functionalities after dynamic
          partnerships. Holisticly deliver prospective web-readiness rather than
          integrated quality vectors. Authoritatively parallel task low-risk
          high-yield e-tailers for real-time niche.'
      />
    </Layout>
  );
}
export default ProductsPage;
