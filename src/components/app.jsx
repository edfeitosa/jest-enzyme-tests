import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './_routes';
import Menu from './menu';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Routes />
      </BrowserRouter>
    )
  }
}

export default App;