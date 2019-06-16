import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <Fragment>
        <Link to='/'>[ Home ]</Link> 
        <Link to='/cadastro'>[ Cadastro ]</Link> 
      </Fragment>
    )
  }
}

export default Menu;