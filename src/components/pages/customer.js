import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../common/layout';
import Hero from '../common/hero';
import PageContent from '../common/pageContent';
import Main from '../common/main';
import AsideNavigation from '../common/asideNavigation';
import TitleNavigation from '../common/asideNavigation/titleNavigation';
import LinksList from '../common/linksList';
import LinkList from '../common/linksList/linkList';

function SingleCustomer({ match }) {
  const { params } = match;
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
        <Main>{params.slug}</Main>
        <AsideNavigation>
          {/** link to customers page */}
          <TitleNavigation path='/klienci' label='Nasi Klienci' />
          {/** links to single customer */}
          <LinksList>
            <LinkList path='/klienci/goscinnosc' label='Gościnność' />
            <LinkList
              path='/klienci/opieka-dlugoterminowa'
              label='Opieka długoterminowa'
            />
            <LinkList
              path='/klienci/pralnie-komercyjne'
              label='Pralnie komercyjne'
            />
            <LinkList path='/klienci/straz-pozarna' label='Straż pożarna' />
            <LinkList path='/klienci/kluby-sportowe' label='Kluby sportowe' />
            <LinkList
              path='/klienci/pralnie-chemiczne'
              label='Pralnie chemiczne'
            />
            <LinkList path='/klienci/restauracje' label='Restauracje' />
            <LinkList path='/klienci/wellness-spa' label='Wellness & SPA' />
            <LinkList path='/klienci/armia' label='Armia' />
            <LinkList
              path='/klienci/marynarka-wojenna'
              label='Marynarka Wojenna'
            />
            <LinkList
              path='/klienci/obiekty-mieszkalne'
              label='Obiekty mieszkalne'
            />
            <LinkList path='/klienci/zaklady-pracy' label='Zakłady pracy' />
            <LinkList
              path='/klienci/pralnie-samoobslugowe'
              label='Pralnie samoobsługowe'
            />
            <LinkList path='/klienci/szpitale' label='Szpitale' />
            <LinkList
              path='/klienci/opieka-nad-dziecmi'
              label='Opieka nad dziećmi'
            />
          </LinksList>
        </AsideNavigation>
      </PageContent>
    </Layout>
  );
}

SingleCustomer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};
export default SingleCustomer;
