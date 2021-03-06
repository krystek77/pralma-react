import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Layout from '../common/layout';
import Hero from '../common/hero';
import PageContent from '../common/pageContent';
import Main from '../common/main';
import AsideNavigation from '../common/asideNavigation';
import TitleNavigation from '../common/titleNavigation';
import LinksList from '../common/linksList';
import LinkList from '../common/linksList/linkList';
import Loader from '../common/loader';
import Picture from '../common/picture';
import BreadCrump from '../common/breadcrump';

function SingleCustomer({
  match: {
    params: { slug },
    url,
  },
}) {
  const [customer, setCustomer] = useState({
    customer: { images: [{}] },
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  // console.log(url);
  useEffect(() => {
    let didUmounted = false;
    const getCustomer = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_BASE_URL, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN_DATOCMS_READ_ONLY}`,
          },
          body: JSON.stringify({
            query: `
              query customer{
                customer(filter:{slug:{eq:"${slug}"}}){
                  id
                  description
                  title
                  slug
                  images {
                    url
                    title
                    alt
                  }
                }
              }
            `,
          }),
        });
        const result = await response.json();
        if (!didUmounted) {
          setCustomer(result.data);
          setIsLoading(false);
        }
      } catch (error) {
        setIsError(true);
      }
    };
    getCustomer();

    return () => {
      didUmounted = true;
      // console.log('SingleCustomer unmounted', slug);
    };
  }, [slug]);
  // console.log(customer);
  // console.log(isLoading);
  // console.log(isError);
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
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <BreadCrump title={customer.customer.title} url={url} />
          <PageContent>
            <Main>
              <Picture
                src={customer.customer.images[0].url}
                alt={customer.customer.images[0].alt}
                title={customer.customer.images[0].title}
                width={500}
              />
              {customer.customer.description}
            </Main>

            <AsideNavigation>
              <TitleNavigation path='/klienci' label='Nasi Klienci' />
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
                <LinkList
                  path='/klienci/kluby-sportowe'
                  label='Kluby sportowe'
                />
                <LinkList
                  path='/klienci/pralnie-chemiczne'
                  label='Pralnie chemiczne'
                />
                <LinkList path='/klienci/restauracje' label='Restauracje' />
                <LinkList
                  path='/klienci/wellness-and-spa'
                  label='Wellness & SPA'
                />
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
        </>
      )}
    </Layout>
  );
}

SingleCustomer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string,
    }).isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
export default SingleCustomer;
