import React, { Component } from 'react';

import Header from '../header/header';

class HireMe extends Component {
  render() {
    return (
      <article className='row'>
        <Header 
            title='Do you want me to join your company?' 
            subtitle='Your position is better than my current job? Let the battle begin!' />
      </article>
    );
  }
}

export default HireMe;