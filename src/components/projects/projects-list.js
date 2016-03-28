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
      .fail(error => {
        reject(error);
        // todo: display error message to screen using a toast style message.
        throw new Error(error);
      });
    })
  }
}

export default ProjectsList;