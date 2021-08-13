import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Home from '../pages/home';
import Calculator from './screens/calculator';
import Quote from './screens/quote';
import Header from './components/header';

const Routes = () => (
  <BrowserRouter>
    <Container maxWidth="lg">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/calculator" component={Calculator} />
        <Route path="/quote" component={Quote} />
      </Switch>
    </Container>
  </BrowserRouter>
);

export default Routes;