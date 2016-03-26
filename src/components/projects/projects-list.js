// List the projects I'm currently working on.
class ProjectsList {

  // Get projects as an input array, or from localStorage.
  // If that fails, get them from Firebase and store the result in localStorage.  
  constructor() {
    this.projects = localStorage['projects'] && JSON.parse(localStorage['projects']) || [];

    if (this.projects.length > 0) {
      this.storeProjects(this.projects);
    }
  }

  areProjectsFound() {
    return this.projects && this.projects.length > 0;
  }

  storeProjects(projects) {
    localStorage['projects'] = JSON.stringify(projects);
  }

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
      .fail(error => {
        reject(error);
      });
    })
  }
}

export default ProjectsList;