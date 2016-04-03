import React, { Component } from 'react';

import Header from '../header/header';

export default class Portfolio extends Component {
  render() {
    return (
      <article className='row'>
        <Header
          title='Websites programmed at work'
          subtitle='Let me know what you think of the websites and web apps I made at work' />
      </article>
    );
  }
}