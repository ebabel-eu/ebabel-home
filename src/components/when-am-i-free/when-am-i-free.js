import React, { Component } from 'react';

import Header from '../header/header';

class WhenAmIFree extends Component {
  render() {
    return (
      <article className='row'>
        <Header 
            title='Let&apos;s schedule a call or a meeting' 
            subtitle='I indicate in my agenda the blocks I&apos;m already booked for: mostly working at eFocus (my employer) and holidays.' />
      </article>
    );
  }
}

export default WhenAmIFree;