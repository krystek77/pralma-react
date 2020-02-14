import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Layout from '../common/layout';
import Hero from '../common/hero';
import PageContent from '../common/pageContent';
import Main from '../common/main';
import Title from '../common/title';
import Description from '../common/description';
import AsideNavigation from '../common/asideNavigation';
import TitleNavigation from '../common/titleNavigation';
import LinksList from '../common/linksList';
import LinkList from '../common/linksList/linkList';

import CustomerCards from '../customers/customerCards';
import CustomerCard from '../customers/customerCards/customerCard';
import Picture from '../common/picture';

import CustomerLinks from '../customers/customerLinks';

import { limitedString } from '../../utils';
import Loader from '../common/loader';

function CustomersPage({ match }) {
  // console.log('Into customer page');
  const { url } = match;
  const [customers, setCustomers] = useState({ allCustomers: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // console.log('CustomersPage useEffect START');
    let didUnmount = false;

    const getAllCustomers = async () => {
      // console.log('Into asyncfunction');
      setIsLoading(true);

      try {
        const response = await fetch(process.env.REACT_APP_API_BASE_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN_DATOCMS_READ_ONLY}`,
          },
          body: JSON.stringify({
            query: `query Customers {
                      allCustomers(orderBy:id_ASC) {
                        id
                        description
                        title
                        slug
                        images {
                          title
                          alt
                          url
      
                        }
                      }
                    }`,
          }),
        });
        const result = await response.json();
        // console.log('After result');
        if (!didUnmount) {
          // console.log('setCustomers');
          setCustomers(result.data);
          setIsLoading(false);
        }
      } catch (error) {
        setIsError(true);
        // console.error(error);
      }
    };
    getAllCustomers();

    // console.log('CustomersPage useEffect END');
    return () => {
      didUnmount = true;
      // console.log('CustomersPage UNMOUNTED');
    };
  }, []);

  // console.log('CustomersPage AFTER useEffect');
  // console.log(customers);
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
      {isError && <div>Something went wrong</div>}
      {isLoading ? (
        <Loader />
      ) : (
        <>
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
                {customers.allCustomers
                  .map(customer => {
                    return (
                      <CustomerCard
                        path={`${url}/${customer.slug}`}
                        key={customer.id}>
                        <Picture
                          src={customer.images[0].url}
                          title={customer.images[0].title}
                          alt={customer.images[0].alt}
                        />
                        <Description
                          descriptionClass='description--small-light'
                          text={limitedString(customer.description, 25)}>
                          <Title level='lvl-3' text={customer.title} />
                        </Description>
                      </CustomerCard>
                    );
                  })
                  .slice(0, 6)}
              </CustomerCards>
            </Main>
            <AsideNavigation>
              <TitleNavigation path={`${url}`} label='Nasi Klienci' />
              <LinksList>
                {customers.allCustomers.map(customer => {
                  return (
                    <LinkList
                      key={customer.id}
                      path={`${url}/${customer.slug}`}
                      label={customer.title}
                    />
                  );
                })}
              </LinksList>
            </AsideNavigation>
          </PageContent>
          <CustomerLinks>
            <CustomerCards>
              {customers.allCustomers
                .map(customer => {
                  return (
                    <CustomerCard
                      path={`${url}/${customer.slug}`}
                      key={customer.id}>
                      <Picture
                        src={customer.images[0].url}
                        title={customer.images[0].title}
                        alt={customer.images[0].alt}
                      />
                      <Description>
                        <Title level='lvl-3' text={customer.title} />
                      </Description>
                    </CustomerCard>
                  );
                })
                .slice(6, 14)}
            </CustomerCards>
          </CustomerLinks>
        </>
      )}
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
