import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../home';
import Exchange from '../exchange';
import NotFound from '../notFound';
import Calculator from '../calculator';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/calculator' component={Calculator} />
        <Route path='/exchange' component={Exchange} />
        <Route path='*' component={NotFound} />
      </Switch>
    )
  }
}

export default Routes;