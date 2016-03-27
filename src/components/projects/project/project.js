import React, { Component } from 'react';

import ProgressBar from '../../progress-bar/progress-bar';
import './project.scss';

class Project extends Component {
  render() {
    let paragraphs = [];
    for (let i = 0, max = this.props.paragraphs.length; i < max; i++) {
      paragraphs.push(<p key={i}>{this.props.paragraphs[i]}</p>)
    }

    let relatedLinks = [];
    let relatedLinksContainer = null;
    if (this.props.relatedLinks && this.props.relatedLinks.length > 0) {
      for (let i = 0, max = this.props.relatedLinks.length; i < max; i++) {
        let relatedLink = this.props.relatedLinks[i];
        relatedLinks.push(
          <li key={i} className='list-group-item'>
            <a href={relatedLink.url}>
              {relatedLink.label}
            </a>
          </li>
        )
      }
      relatedLinksContainer = 
        <div className='ndj-related-links'>
          <h3 className='h5 ndj-small-title'><strong>More about this project</strong></h3>
          <ul className='list-group'>
            {relatedLinks}
          </ul>
        </div>
    }

    return (
      <article className='col-md-4 col-sm-6 ndj-project'>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h2 className='panel-title'>{this.props.title}</h2>
          </div>
          <div className='panel-body'>
            {paragraphs}
            {relatedLinksContainer}
          </div>
          <div className='panel-footer'>
            <h3 className='h5 ndj-small-title'>Project completion</h3>
            <ProgressBar amount={this.props.progressAmount} />
          </div>
        </div>
      </article>
    )
  }
}

Project.defaultProps = {
  progressAmount: 0
}

Project.propTypes = {
  title: React.PropTypes.string.isRequired,
  paragraphs: React.PropTypes.array.isRequired,
  progressAmount: React.PropTypes.number.isRequired,
  relatedLinks: React.PropTypes.array
}

export default Project;