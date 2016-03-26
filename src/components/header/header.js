import React, { Component } from 'react';

import './header.scss';

class Header extends Component {
  render() {
    return (
      <div className='col-md-12'>
        <header className='page-header'>
          <h1>{this.props.title}</h1>
        </header>
      </div>
    );
  }
}

export default Header;