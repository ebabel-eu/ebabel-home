import React, { Component } from 'react';

import Header from './header/Header';
import Nav from './nav/nav';

class NavigationBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <Header />
          <Nav />
        </div>
      </nav>
    )
  }
}

export default NavigationBar;