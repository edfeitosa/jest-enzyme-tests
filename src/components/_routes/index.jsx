import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../home';
import Cadastro from '../cadastro';
import NotFound from '../notFound';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/cadastro' component={Cadastro} />
        <Route path='*' component={NotFound} />
      </Switch>
    )
  }
}

export default Routes;