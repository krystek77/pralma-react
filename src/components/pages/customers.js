import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../common/layout';
import Hero from '../common/hero';
import PageContent from '../common/pageContent';
import Main from '../common/main';
import Title from '../common/title';
import Description from '../common/description';
import AsideNavigation from '../common/asideNavigation';
import TitleNavigation from '../common/asideNavigation/titleNavigation';
import LinksList from '../common/linksList';
import LinkList from '../common/linksList/linkList';

import defaultImg from '../../assets/images/customers/default_customers_250_150.png';
import hospitality from '../../assets/images/customers/hospitality.png';
import restaurants from '../../assets/images/customers/restaurants.png';

import CustomerCards from '../customers/customerCards';
import CustomerCard from '../customers/customerCards/customerCard';
import Picture from '../common/picture';

import CustomerLinks from '../customers/customerLinks';

function CustomersPage({ match }) {
  const { url } = match;
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
        <Main>
          <Description
            text={`At UniMac®, we don’t believe in cookie-cutter on-premises laundry
      solutions. We understand that every industry has a unique set of
      challenges and demands. That’s why we offer a full line of
      industrial-quality commercial laundry equipment to suit the needs of
      businesses of all types and sizes. So no matter what your laundry
      operation requires, you can be sure that UniMac has a solution.`}>
            <Title level='lvl-2' text='Poważnie o Twojej pralni' />
          </Description>
          <CustomerCards>
            <CustomerCard path={`${url}/goscinnosc`}>
              <Picture src={hospitality} />
              <Description
                descriptionClass='description--small-light'
                text={`For more than 70 years, UniMac has been focused on providing
                    equipment and technology solutions specifically for the
                    hotel on-premises laundry industry, and we work closely with
                    our customers to identify and address their key concerns
                    while preserving costs and increasing throughput.`}>
                <Title level='lvl-3' text='Gościnność' />
              </Description>
            </CustomerCard>
            <CustomerCard path={`${url}/opieka-dlugoterminowa`}>
              <Picture src={restaurants} />
              <Description
                descriptionClass='description--small-light'
                text={`For more than 70 years, UniMac has been focused on providing
                    equipment and technology solutions specifically for the
                    hotel on-premises laundry industry, and we work closely with
                    our customers to identify and address their key concerns
                    while preserving costs and increasing throughput.`}>
                <Title level='lvl-3' text='Opieka długoterminowa' />
              </Description>
            </CustomerCard>
            <CustomerCard path={`${url}/pralnie-komercyjne`}>
              <Picture src={defaultImg} />
              <Description
                descriptionClass='description--small-light'
                text={`For more than 70 years, UniMac has been focused on providing
                    equipment and technology solutions specifically for the
                    hotel on-premises laundry industry, and we work closely with
                    our customers to identify and address their key concerns
                    while preserving costs and increasing throughput.`}>
                <Title level='lvl-3' text='Pralnie komercyjne' />
              </Description>
            </CustomerCard>
            <CustomerCard path={`${url}/straz-pozarna`}>
              <Picture src={defaultImg} />
              <Description
                descriptionClass='description--small-light'
                text={`For more than 70 years, UniMac has been focused on providing
                    equipment and technology solutions specifically for the
                    hotel on-premises laundry industry, and we work closely with
                    our customers to identify and address their key concerns
                    while preserving costs and increasing throughput.`}>
                <Title level='lvl-3' text='Straż pożarna' />
              </Description>
            </CustomerCard>
            <CustomerCard path={`${url}/kluby-sportowe`}>
              <Picture src={defaultImg} />
              <Description
                descriptionClass='description--small-light'
                text={`For more than 70 years, UniMac has been focused on providing
                    equipment and technology solutions specifically for the
                    hotel on-premises laundry industry, and we work closely with
                    our customers to identify and address their key concerns
                    while preserving costs and increasing throughput.`}>
                <Title level='lvl-3' text='Kluby sportowe' />
              </Description>
            </CustomerCard>
            <CustomerCard path={`${url}/pralnie-chemiczne`}>
              <Picture src={defaultImg} />
              <Description
                descriptionClass='description--small-light'
                text={`For more than 70 years, UniMac has been focused on providing
                    equipment and technology solutions specifically for the
                    hotel on-premises laundry industry, and we work closely with
                    our customers to identify and address their key concerns
                    while preserving costs and increasing throughput.`}>
                <Title level='lvl-3' text='Pralnie chemiczne' />
              </Description>
            </CustomerCard>
          </CustomerCards>
        </Main>
        <AsideNavigation>
          <TitleNavigation path={`${url}`} label='Nasi Klienci' />
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

      <CustomerLinks>
        <CustomerCards>
          <CustomerCard path={`${url}/restuaracje`}>
            <Picture src={restaurants} />
            <Description>
              <Title level='lvl-3' text='Resturacje' />
            </Description>
          </CustomerCard>
          <CustomerCard path={`${url}/wellness-spa`}>
            <Picture src={defaultImg} />
            <Description>
              <Title level='lvl-3' text='Wellness & SPA' />
            </Description>
          </CustomerCard>
          <CustomerCard path={`${url}/armia`}>
            <Picture src={defaultImg} />
            <Description>
              <Title level='lvl-3' text='Armia' />
            </Description>
          </CustomerCard>
          <CustomerCard path={`${url}/marynarka-wojenna`}>
            <Picture src={defaultImg} />
            <Description>
              <Title level='lvl-3' text='Marynarka wojenna' />
            </Description>
          </CustomerCard>
          <CustomerCard path={`${url}/obiekty-mieszkalne`}>
            <Picture src={defaultImg} />
            <Description>
              <Title level='lvl-3' text='Obiekty mieszkalne' />
            </Description>
          </CustomerCard>
          <CustomerCard path={`${url}/zaklady-pracy`}>
            <Picture src={defaultImg} />
            <Description>
              <Title level='lvl-3' text='Zakłady pracy' />
            </Description>
          </CustomerCard>
        </CustomerCards>
      </CustomerLinks>
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
