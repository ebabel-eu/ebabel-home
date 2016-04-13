import React from 'react';

export default class RelatedLinks {
  constructor(input = []) {
    this.input = input;
  }

  links() {
    let relatedLinks = null;
    let relatedLinksContainer = null;

    if (this.input) {
      relatedLinks = this.input.map((relatedLink, i) => {
        return (
          <li key={i} className="list-group-item">
            <a href={relatedLink.url}>
              {relatedLink.label}
            </a>
          </li>
        );
      });

      if (relatedLinks && relatedLinks.length > 0) {
        relatedLinksContainer = (
          <div className="ndj-related-links">
            <h3 className="h5 ndj-small-title"><strong>More about this project</strong></h3>
            <ul className="list-group">
              {relatedLinks}
            </ul>
          </div>
        );
      }
    }

    return relatedLinksContainer;
  }
}
