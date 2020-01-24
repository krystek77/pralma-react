import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './components/pages/home';
import ProductsPage from './components/pages/products';
import TechnologiesPage from './components/pages/technologies';
import SigninPage from './components/pages/signin';
import ErrorPage from './components/pages/404';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/produkty' component={ProductsPage} />
      <Route exact path='/technologie' component={TechnologiesPage} />
      <Route exact path='/logowanie' component={SigninPage} />
      <Route component={ErrorPage} />
    </Switch>
  );
}

export default App;
