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

function CustomersPage({ match }) {
  const { url, params } = match;
  return (
    <Layout>
      <Hero
        heroClass={['hero-customers']}
        alt='Okładka strony Klienci'
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
          <TitleNavigation path={`${url}`} label='Nasi Klienci' />
          {/** links to single customer */}
          <LinksList>
            <LinkList path={`${url}/goscinnosc`} label='Gościnność' />
            <LinkList
              path={`${url}/opieka-dlugoterminowa`}
              label='Opieka długoterminowa'
            />
            <LinkList
              path={`${url}/pralnie-komercyjne`}
              label='Pralnie komercyjne'
            />
            <LinkList path={`${url}/straz-pozarna`} label='Straż pożarna' />
            <LinkList path={`${url}/kluby-sportowe`} label='Kluby sportowe' />
            <LinkList
              path={`${url}/pralnie-chemiczne`}
              label='Pralnie chemiczne'
            />
            <LinkList path={`${url}/restauracje`} label='Restauracje' />
            <LinkList path={`${url}/wellness-spa`} label='Wellness & SPA' />
            <LinkList path={`${url}/armia`} label='Armia' />
            <LinkList
              path={`${url}/marynarka-wojenna`}
              label='Marynarka Wojenna'
            />
            <LinkList
              path={`${url}/obiekty-mieszkalne`}
              label='Obiekty mieszkalne'
            />
            <LinkList path={`${url}/zaklady-pracy`} label='Zakłady pracy' />
            <LinkList
              path={`${url}/pralnie-samoobslugowe`}
              label='Pralnie samoobsługowe'
            />
            <LinkList path={`${url}/szpitale`} label='Szpitale' />
            <LinkList
              path={`${url}/opieka-nad-dziecmi`}
              label='Opieka nad dziećmi'
            />
          </LinksList>
        </AsideNavigation>
      </PageContent>
      <aside
        style={{
          backgroundColor: 'blue',
        }}>
        --- links customers ---
      </aside>
    </Layout>
  );
}
CustomersPage.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
    params: PropTypes.object,
  }).isRequired,
};
export default CustomersPage;
