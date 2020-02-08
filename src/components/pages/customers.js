import React from 'react';
import Layout from '../common/layout';
import Hero from '../common/hero';
import PageContent from '../common/pageContent';

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
      <PageContent>
        <main style={{ backgroundColor: 'grey' }}>--- main customers ---</main>
        <div style={{ backgroundColor: 'orange' }}>
          --- navigation customers ---
        </div>
        <aside
          style={{
            backgroundColor: 'blue',
            gridColumnStart: 1,
            gridColumnEnd: 'span 2',
          }}>
          --- links customers ---
        </aside>
      </PageContent>
    </Layout>
  );
}
export default CustomersPage;
