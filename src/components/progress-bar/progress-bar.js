import React, { Component } from 'react';

import './progress-bar.css';

class ProgressBar extends Component {
  render() {
    const styles = {
      width: [this.props.amount, '%'].join('')
    };

    return (
      <div className='progress'>
        <div className='progress-bar' 
            data-role='progressbar' 
            aria-valuenow={this.props.amount} 
            aria-valuemin='0' 
            aria-valuemax='100' 
            style={styles}>
          {this.props.amount}{this.props.unit || '%'}
        </div>
      </div>
    )
  }
}

export default ProgressBar;