import React, { Component } from 'react';
import { Link } from 'react-router'

import Actions from './actions';
import UpdatePageTitle from './update-page-title.js';

const actions = new Actions();

class Nav extends Component {
  render() {
    const currentUrl = window.location.hash.substr(1).split('?')[0];
    const updatePageTitle = new UpdatePageTitle({ currentUrl: currentUrl, links: actions.links });

    const links = actions.links.map((link, i) => {
      if (currentUrl === link.url) {
        return (
          <li key={i} className='active'>
            <a>
              {link.label}
              <span className='sr-only'>(current)</span>
            </a>
          </li>
        )
      } else {
        return (
          <li key={i}>
            <Link to={link.url}>
              {link.label}
            </Link>
          </li>
        )
      }
    });

    return (
      <div className='collapse navbar-collapse' id='bs-navbar'>
        <ul className='nav navbar-nav'>{links}</ul>
      </div>
    )
  }
}

export default Nav;