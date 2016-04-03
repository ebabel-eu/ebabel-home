import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className='navbar-header'>
        <button type='button' className='navbar-toggle collapsed'
          data-toggle='collapse' data-target='#bs-navbar' aria-expanded='false'>
          <span className='sr-only'>Toggle navigation</span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
        </button>
        <span className='navbar-brand'>Nadjib</span>
      </div>
    )
  }
}