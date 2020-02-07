import React from 'react';
import Layout from '../common/layout';
import Hero from '../common/hero';

function CustomersPage() {
  return (
    <Layout>
      <Hero
        heroClass={['hero-customers']}
        alt='Okładka strony klienci'
        label='Nasi Klienci'
        title='Przemysłowe wyposażenie pralnicze dla każdego rodzaju pralni'
        description='Globally maximize innovative functionalities after dynamic
          partnerships. Holisticly deliver prospective web-readiness rather than
          integrated quality vectors. Authoritatively parallel task low-risk
          high-yield e-tailers for real-time niche.'
      />
    </Layout>
  );
}
export default CustomersPage;
