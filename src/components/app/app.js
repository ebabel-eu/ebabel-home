// React
import React, { Component } from 'react';

// Internal dependencies.
import Header from '../nav/header/header';
import Nav from '../nav/nav';
import Footer from '../footer/footer';

import './app.scss';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <nav className='navbar navbar-default'>
          <div className='container-fluid'>
            <Header />
            <Nav />
          </div>
        </nav>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object
};
