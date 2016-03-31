class UpdatePageTitle {
  constructor(input = { currentUrl: null, links: [] }) {
    const { currentUrl, links } = input;

    const currentLink = links.find(link => link.url === currentUrl);

    window.document.title = currentLink.label;
  }
}

export default UpdatePageTitle;