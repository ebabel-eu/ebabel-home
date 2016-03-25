import React, { Component } from 'react';

class MakingElectronicGadgets extends Component {
  render() {
    return (
      <article className='col-md-4 col-sm-6'>
        <div className='panel panel-default'>
          <div className='panel-heading'><h3 className='panel-title'>Making electronic gadgets</h3></div>
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
        </div>
      </article>
    )
  }
}

export default MakingElectronicGadgets;