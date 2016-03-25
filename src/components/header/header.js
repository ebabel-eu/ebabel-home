import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='col-md-12'>
        <div className='page-header'>
          <h1 className='h2'>
            {this.props.title}
          </h1>
        </div>
      </div>
    );
  }
}

export default Header;