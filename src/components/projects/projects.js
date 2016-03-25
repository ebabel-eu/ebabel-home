import React, { Component } from 'react';

import Pictologo from './pictologo/pictologo';
import MakingElectronicGadgets from './making-electronic-gadgets/making-electronic-gadgets';
import LearningArabic from './learning-arabic/learning-arabic';

class Projects extends Component {
  render() {
    return (
      <article className='row'>
        <div className='col-md-12'>
          <h2 className='well well-lg'>Projects I&apos;m currently working on</h2>
        </div>
        <Pictologo />
        <MakingElectronicGadgets />
        <LearningArabic />
      </article>
    );
  }
}

export default Projects;