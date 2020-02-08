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
import bgImage from '../../assets/images/hero/bg_technologies.png';

function TechnologiesPage({ match }) {
  const { url, params } = match;
  return (
    <Layout>
      <Hero
        heroClass={['hero-technologies']}
        img={bgImage}
        alt='Okładka strony technologie'
        label='Technologie'
        title='Nowoczesne pralnie przemysłowe korzystają z najnowszych technologii'
        description='Globally maximize innovative functionalities after dynamic
          partnerships. Holisticly deliver prospective web-readiness rather than
          integrated quality vectors. Authoritatively parallel task low-risk
          high-yield e-tailers for real-time niche.'
      />
      <PageContent>
        <Main>{params.slug}</Main>
        <AsideNavigation>
          <TitleNavigation path={`${url}`} label='Technologie' />
          <LinksList>
            <LinkList path={`${url}/cascade-drum`} label='Cascade Drum' />
            <LinkList path={`${url}/dimple-dry`} label='DimpleDry' />
            <LinkList path={`${url}/ease-soap`} label='easySOAP' />
            <LinkList path={`${url}/trace-tech`} label='TRACE-TECH' />
            <LinkList path={`${url}/optiload`} label='OPTILOAD' />
            <LinkList path={`${url}/power-wash`} label='PowerWash' />
            <LinkList path={`${url}/evo4`} label='EVO4' />
            <LinkList path={`${url}/senso-dry`} label='senso.dry' />
            <LinkList path={`${url}/eco`} label='eco' />
            <LinkList path={`${url}/radax`} label='radax' />
            <LinkList path={`${url}/senso-speed`} label='senso.speed' />
            <LinkList path={`${url}/ultra-balance`} label='ultra-balance' />
            <LinkList path={`${url}/softwash`} label='softwash' />
            <LinkList path={`${url}/shower-jet`} label='Shower-Jet' />
            <LinkList path={`${url}/xcontrol-plus`} label='XControl Plus' />
          </LinksList>
        </AsideNavigation>
      </PageContent>
    </Layout>
  );
}

TechnologiesPage.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string,
    params: PropTypes.object,
  }).isRequired,
};

export default TechnologiesPage;
