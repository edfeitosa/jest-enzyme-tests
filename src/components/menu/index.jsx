import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <Fragment>
        <Link to='/'>[ Home ]</Link>
        &nbsp;&nbsp;
        <Link to='/calculator'>[ Calculadora ]</Link>
        &nbsp;&nbsp;
        <Link to='/exchange'>[ Câmbio ]</Link>
      </Fragment>
    )
  }
}

export default Menu;