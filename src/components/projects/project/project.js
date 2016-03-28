import React, { Component } from 'react';

import ProgressBar from '../../progress-bar/progress-bar';
import RelatedLinks from './related-links.js';
import './project.scss';

class Project extends Component {
  render() {
    const paragraphs = this.props.paragraphs.map((paragraph, i) => {
      return <p key={i}>{paragraph}</p>
    });

    const relatedLinks = new RelatedLinks(this.props.relatedLinks);


    return (
      <article className='col-md-4 col-sm-6 ndj-project'>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h2 className='panel-title'>{this.props.title}</h2>
          </div>
          <div className='panel-body'>
            {paragraphs}
            {relatedLinks.links()}
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