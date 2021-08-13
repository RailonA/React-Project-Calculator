import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import Calculator from './pages/calculator';
import Home from './pages/home';
import Quote from './pages/quote';

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/calculator" component={Calculator} />
      <Route exact path="/quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
