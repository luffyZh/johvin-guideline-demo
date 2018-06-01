import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createHashHistory } from 'history';
import App from '../App';
import GuideLine from '../components/GuideLine';

const history = createHashHistory();

class RootRouter extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/Guideline' component={GuideLine} />
        </Switch>
      </Router>
    );
  }
}

export default RootRouter;