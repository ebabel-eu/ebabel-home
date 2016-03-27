import React, { Component } from 'react';

import Header from '../header/header';
import Project from './project/project';
import ProjectsList from './projects-list.js';

class Projects extends Component {
  constructor() {
    super();

    // Note: This is the only place where it's ok 
    // to set the state without using setState.
    this.state = {
      projects: []
    };
  }

  componentWillMount() {
    const projectsList = new ProjectsList();

    if (projectsList.areProjectsFound()) {
      this.setState({
        projects: projectsList.projects
      })
    } else {
      projectsList.getProjects().then(projects => {
        this.setState({
          projects: projects
        })
      })
    }
  }

  render() {
    const projects = [];

    for(let i = 0, max = this.state.projects.length; i < max; i++) {
      let project = this.state.projects[i];
      projects.push(
        <Project key={i} 
          title={project.title} 
          paragraphs={project.paragraphs}
          progressAmount={project.progressAmount}
          relatedLinks={project.relatedLinks} />
      )
    }

    return (
      <article className='row'>
        <Header 
            title='Projects I&apos;m currently working on' 
            subtitle='My current projects at eFocus, my employer, are confidential. However, here&apos;s what I do in my spare time.' />
        {projects}
      </article>
    );
  }
}

export default Projects;