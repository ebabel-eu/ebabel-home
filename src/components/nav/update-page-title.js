class UpdatePageTitle {
  constructor(input = { currentUrl: null, links: [] }) {
    const currentUrl = input.currentUrl;
    const links = input.links;
    const currentLink = links.find(link => {
      if (link.url === currentUrl) {
        return link;
      }
    });

    window.document.title = currentLink.label;
  }
}

export default UpdatePageTitle;