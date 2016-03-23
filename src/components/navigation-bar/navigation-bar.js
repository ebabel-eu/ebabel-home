import React from 'react';

import Header from './header/Header';
import Nav from './nav/nav';

const NavigationBar = () => (
  <nav className='navbar navbar-default'>
    <div className='container-fluid'>
      <Header />
      <Nav />
    </div>
  </nav>
);

export default NavigationBar;