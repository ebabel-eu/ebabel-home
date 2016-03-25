import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className='col-md-12'>
        <h2 className='well well-lg h3'>{this.props.title}</h2>
      </div>
    );
  }
}

export default Header;