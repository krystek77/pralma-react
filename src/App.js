import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Cookies from 'universal-cookie';
import Modal from './components/common/modal';
import HomePage from './components/pages/home';
import ProductsPage from './components/pages/products';
import TechnologiesPage from './components/pages/technologies';
import AboutUsPage from './components/pages/about';
import ContactPage from './components/pages/contact';
import SigninPage from './components/pages/signin';
import ErrorPage from './components/pages/404';

const cookies = new Cookies();

function App() {
  const [accept, setAccept] = useState(cookies.get('accept'));
  console.log('Invoke App', accept);
  function setAcceptCookie() {
    console.log('Set accept cookie');
    setAccept('true');
    cookies.set('accept', 'true');
  }

  useEffect(() => {
    console.log('App useEffect hooks');

    const isAccepted = cookies.get('accept');
    if (!isAccepted) {
      setAccept('false');
      cookies.set('accept', 'false');
    }
  }, [accept]);

  return (
    <>
      {accept === 'false' ? (
        <Modal handleAccept={setAcceptCookie} />
      ) : (
        console.log('you accepted cookies', accept)
      )}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/produkty' component={ProductsPage} />
        <Route exact path='/technologie' component={TechnologiesPage} />
        <Route exact path='/o-nas' component={AboutUsPage} />
        <Route exact path='/kontakt' component={ContactPage} />
        <Route exact path='/logowanie' component={SigninPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
