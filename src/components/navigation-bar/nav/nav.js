import React from 'react';

import Actions from './actions';

const actions = new Actions();

const Nav = () => (
  <div className='collapse navbar-collapse' id='bs-navbar'>
    <ul className='nav navbar-nav'>
      {
        actions.links.map((link, i) => {
          if (link.current) {
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
                <a href={link.url}>
                  {link.label}
                </a>
              </li>
            )
          }
        })
      }
    </ul>
  </div>
);

export default Nav;