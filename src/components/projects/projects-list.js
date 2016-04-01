'use strict';

import { ERR_API_NOT_FOUND, ERR_UNEXPECTED } from '../../constants.js';

// List the projects I'm currently working on.
class ProjectsList {

  // Get projects from localStorage first (if any).
  constructor() {
    this.projects = localStorage['projects'] && JSON.parse(localStorage['projects']) || [];
  }

  areProjectsFound() {
    return this.projects && this.projects.length > 0;
  }

  // Persist projects into localStorage for future fast loading.
  storeProjects(projects) {
    localStorage['projects'] = JSON.stringify(projects);
  }

  // Make an Ajax call to get projects data.
  // Once data is found, update this.projects and store them in localStorage.
  getProjects() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/json/projectsx.json',
        method: 'GET'
      })
      .done(response => {
        this.projects = response;
        resolve(response);
        this.storeProjects(response);
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        const _error = jqXHR.error();
        let errorMessage;

        switch (_error.status) {
          case 404:
            errorMessage = ERR_API_NOT_FOUND;
            break;
          default:
            errorMessage = ERR_UNEXPECTED;
            break;
        }

        const error = new Error(errorMessage);

        reject(error);
      });
    })
  }
}

export default ProjectsList;