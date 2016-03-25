import React, { Component } from 'react';

import ProgressBar from '../../progress-bar/progress-bar';

class LearningArabic extends Component {
  render() {
    return (
      <article className='col-md-4 col-sm-6'>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h3 className='panel-title'>Learning Arabic</h3>
          </div>
          <div className='panel-body'>
            <p>I was born and grew up in France, but my parents are from Morocco and Algeria.</p>
            <p>
              They never taught me the Arabic language; learning it is proving more challenging 
              than working out how to use a new Javascript library!
            </p>
            <p>Still, I will get there; there is no pressure so I&apos;m taking my time with this one.</p>
          </div>
          <div className='panel-footer'>
            <ProgressBar amount={25} />
          </div>
        </div>
      </article>
    )
  }
}

export default LearningArabic;