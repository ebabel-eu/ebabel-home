import React from 'react';

const actions = [
  { label: 'Current projects', url: '/#', current: true},
  { label: 'Get in touch', url: '/#get-in-touch' },
  { label: 'When am I free', url: '/#when-am-i-free' },
  { label: 'Hire me', url: '/#hire-me' }
];

const Nav = () => (
  <div className='collapse navbar-collapse' id='bs-navbar'>
    <ul className='nav navbar-nav'>
      {
        actions.map((action, i) => {
          if (action.current) {
            return (
              <li key={i} className='active'>
                <a>
                  {action.label}
                  <span className='sr-only'>(current)</span>
                </a>
              </li>
            )
          } else {
            return (
              <li key={i}>
                <a href={action.url}>
                  {action.label}
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