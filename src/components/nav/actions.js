export default class Actions {
  constructor(links = null) {
    this.links = links ||
      localStorage['links'] && JSON.parse(localStorage['links']) ||
      this.defaultLinks();

    this.storeLinks();
  }

  storeLinks() {
    localStorage['links'] = JSON.stringify(this.links);
  }

  defaultLinks() {
    const links = [
      { label: 'Current projects', url: '/' },
      { label: 'Portfolio', url: '/portfolio' },
      { label: 'Interview', url: '/interview' },
      { label: 'Get in touch', url: '/get-in-touch' },
      { label: 'When am I free', url: '/when-am-i-free' },
      { label: 'Hire me', url: '/hire-me' }
    ];

    return links;
  }
}