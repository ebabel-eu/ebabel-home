class PageTitle {
  constructor(input = { currentUrl: null, links: [] }) {
    const { currentUrl, links } = input;

    this.currentLink = links.find(link => link.url === currentUrl);
  }
  
  update() {
    window.document.title = this.currentLink.label;
  }
}

export default PageTitle;