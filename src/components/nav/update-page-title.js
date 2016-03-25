class UpdatePageTitle {

  constructor(input) {
    if (!input || !input.currentUrl || !input.links) {
      throw new Error('UpdatePageTitle is missing input.');
    }

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