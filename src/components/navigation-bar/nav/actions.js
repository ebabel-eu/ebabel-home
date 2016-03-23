class Actions {

  constructor(links = null) {
    this.links = links || this.defaultLinks();
  }

  defaultLinks() {
    return [
      { label: 'Current projects', url: '/#', current: true},
      { label: 'Get in touch', url: '/#get-in-touch' },
      { label: 'When am I free', url: '/#when-am-i-free' },
      { label: 'Hire me', url: '/#hire-me' }
    ];
  }

}

export default Actions;