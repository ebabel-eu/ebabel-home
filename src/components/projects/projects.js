import React, { Component } from 'react';

import Header from '../header/header';
import Project from './project/project';
import ProjectsList from './projects-list.js';

export default class Projects extends Component {
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

    // Try to get the projects from localStorage (fastest method),
    // then update the state to get them displayed.
    if (projectsList.areProjectsFound()) {
      this.setState({
        projects: projectsList.projects
      });
    }

    // Regardless of whether projects were found in localStorage,
    // now get the latest version from the web API, in case there is any update.
    // This makes sense because first projects are fetched from localStorage (if any),
    // they get rendered to the screen, and finally, while the user can read projects already,
    // an async call is made to get the latest from the web API over the network.
    projectsList.getProjects()
      .then(projects => {
        this.setState({
          projects: projects
        });
      })
      .catch(error => {
        // todo: display error message to screen using a toast style message.
        throw new Error(error);
      });
  }

  render() {
    const projects = [];

    for (let i = 0, max = this.state.projects.length; i < max; i++) {
      let project = this.state.projects[i];
      projects.push(
        <Project key={i}
          title={project.title}
          paragraphs={project.paragraphs}
          progressAmount={project.progressAmount}
          relatedLinks={project.relatedLinks} />
      );
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