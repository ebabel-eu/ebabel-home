import React from 'react';

import Header from './header/Header';

const actions = [
  { label: 'Current projects', current: true },
  { label: 'Get in touch', current: false },
  { label: 'When am I free', current: false },
  { label: 'Hire me', current: false }
];

const NavigationBar = () => (
  <nav className='navbar navbar-default'>
    <div className='container-fluid'>
      <Header />
      <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
        <ul className='nav navbar-nav'>
          {
            actions.map((action, i) => {
              const isActive = action.current ? 'active' : '';
              return (
                <li key={i} className={isActive}>
                  <a href='#'>
                    {action.label}
                    <span className='sr-only'>{action.sr}</span>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  </nav>
);

export default NavigationBar;