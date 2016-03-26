import React, { Component } from 'react';

import ProgressBar from '../../progress-bar/progress-bar';

class MakingElectronicGadgets extends Component {
  render() {
    return (
      <article className='col-md-4 col-sm-6 ndj-project'>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h2 className='panel-title'>Making electronic gadgets</h2>
          </div>
          <div className='panel-body'>
            <p>I&apos;ve started making electronic gadgets with an <mark>Arduino</mark> starter kit.</p>
            <p>
              This is a nice hobby to spend time on and there&apos;s a tie-in with web development 
              and processing data in apps.
            </p>
            <p>
              Ultimately I would love to build a fully automated system that does something useful, 
              like entertaining my cats when I&apos;m not home.
            </p>
          </div>
          <div className='panel-footer'>
            <ProgressBar amount={15} />
          </div>
        </div>
      </article>
    )
  }
}

export default MakingElectronicGadgets;