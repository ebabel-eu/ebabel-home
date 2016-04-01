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
        url: '/json/projects.json',
        method: 'GET'
      })
      .done(response => {
        this.projects = response;
        resolve(response);
        this.storeProjects(response);
      })
      .fail((jqXHR, textStatus, errorThrown) => {
        const error = jqXHR.error();

        switch (error.status) {
          case 404:
            reject(ERR_API_NOT_FOUND);
          default:
            reject(ERR_UNEXPECTED);
        }
      });
    })
  }
}

export default ProjectsList;