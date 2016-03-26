import React, { Component } from 'react';

import Header from '../header/header';
import Pictologo from './pictologo/pictologo';
import MakingElectronicGadgets from './making-electronic-gadgets/making-electronic-gadgets';
import LearningArabic from './learning-arabic/learning-arabic';
import LearningJenkins from './learning-jenkins/learning-jenkins';

//import './projects.scss';

class Projects extends Component {
  render() {
    return (
      <article className='row'>
        <Header title='Projects I&apos;m currently working on' />
        <Pictologo />
        <MakingElectronicGadgets />
        <LearningJenkins />
        <LearningArabic />
      </article>
    );
  }
}

export default Projects;