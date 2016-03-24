import React, { Component } from 'react';
import { Link } from 'react-router'

import Actions from './actions';

const actions = new Actions();

class Nav extends Component {
  render() {
    return (
      <div className='collapse navbar-collapse' id='bs-navbar'>
        <ul className='nav navbar-nav'>
          {
            actions.links.map((link, i) => {
              if (window.location.hash.substr(1).split('?')[0] === link.url) {
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
            })
          }
        </ul>
      </div>
    )
  }
}

export default Nav;