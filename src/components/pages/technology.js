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

function SingleTechnology({ match }) {
  const { params } = match;
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
          <TitleNavigation path="/technologie" label="Technologie" />
          <LinksList>
            <LinkList
              path="/technologie/cascade-drum"
              label="Cascade Drum"
            />
            <LinkList path="/technologie/dimple-dry" label="DimpleDry" />
            <LinkList path="/technologie/ease-soap" label="easySOAP" />
            <LinkList path="/technologie/trace-tech" label="TRACE-TECH" />
            <LinkList path="/technologie/optiload" label="OPTILOAD" />
            <LinkList path="/technologie/power-wash" label="PowerWash" />
            <LinkList path="/technologie/evo4" label="EVO4" />
            <LinkList path="/technologie/senso-dry" label="senso.dry" />
            <LinkList path="/technologie/eco" label="eco" />
            <LinkList path="/technologie/radax" label="radax" />
            <LinkList path="/technologie/senso-speed" label="senso.speed" />
            <LinkList
              path="/technologie/ultra-balance"
              label="ultra-balance"
            />
            <LinkList path="/technologie/softwash" label="softwash" />
            <LinkList path="/technologie/shower-jet" label="Shower-Jet" />
            <LinkList
              path="/technologie/xcontrol-plus"
              label="XControl Plus"
            />
          </LinksList>
        </AsideNavigation>
      </PageContent>
    </Layout>
  );
}

SingleTechnology.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

export default SingleTechnology;
