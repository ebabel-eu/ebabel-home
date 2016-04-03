import React, { Component } from 'react';

import Header from '../header/header';

export default class Interview extends Component {
  render() {
    return (
      <article className='row'>
        <Header
          title='My answers to standard interview questions'
          subtitle='If we cover standard interview questions here, we can jump straight to what is relevant to your business when we meet.' />
      </article>
    );
  }
}