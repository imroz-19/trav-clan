import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import App from './app';
import CustomerBidDetails from './components/CustomerBidDetails';

import history from './history';

const Routes = () => {

  return(
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={App}/>
          <Route path="/customer/details/:id" component={CustomerBidDetails}/>
          <Route component="NotFound"/>
        </Switch>
      </Router>
  
  )
}

export default Routes;