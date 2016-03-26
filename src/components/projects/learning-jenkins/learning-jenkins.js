import React, { Component } from 'react';

import ProgressBar from '../../progress-bar/progress-bar';

class LearningJenkins extends Component {
  render() {
    return (
      <article className='col-md-4 col-sm-6 ndj-project'>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h2 className='panel-title'>Learning Jenkins</h2>
          </div>
          <div className='panel-body'>
            <p>I have used Travis and Wercker continuous integration tools in the past.</p>
            <p>My partner wants to learn how o use Jenkins, so I agreed to learn it too.</p>
          </div>
          <div className='panel-footer'>
            <ProgressBar amount={5} unit='%' />
          </div>
        </div>
      </article>
    )
  }
}

export default LearningJenkins;