import React from 'react';
import Layout from '../common/layout';
import Hero from '../common/hero';
import bgImage from '../../assets/images/about/bg_hero_pralma_dark-min.png';

function AboutUsPage() {
  return (
    <Layout>
      <Hero
        heroClass={['hero-about']}
        alt='Okładka strony o nas'
        img={bgImage}
        label='O nas'
        title='Producent przemysłowych urządzeń pralniczych oraz dystrybutor maszyn marki Primus'
        description='Od 1992 roku Pralma zajmuje się dostarczaniem technologii pralniczych produkując przemysłowe wyposażenie pralnicze dla każdego typu pralni. 
        Jesteśmy również autoryzowanym dystrybutorem urządzeń marki Primus - wiodącego producenta na świecie. Świadczymy serwis urządzeń, montaż oraz szkolenia
        z technologii prania.'
      />
    </Layout>
  );
}
export default AboutUsPage;
