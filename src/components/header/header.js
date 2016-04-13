import React, { Component } from 'react';

// require('./header.css');

export default class Header extends Component {
  render() {
    let subtitleContainer = null;

    if (this.props.subtitle) {
      subtitleContainer =
        <small>{this.props.subtitle}</small>
    }

    return (
      <div className='col-md-12'>
        <header className='page-header ndj-page-header'>
          <h1>{this.props.title}{subtitleContainer}</h1>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string
}