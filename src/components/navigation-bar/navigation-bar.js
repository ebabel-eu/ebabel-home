import React from 'react';

const actions = [
  { label: 'Current projects', current: true },
  { label: 'Get in touch', current: false },
  { label: 'When am I free', current: false },
  { label: 'Hire me', current: false }
];

const NavigationBar = () => (
  <nav className='navbar navbar-default'>
    <div className='container-fluid'>
      <div className='navbar-header'>
        <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
          <span className='sr-only'>Toggle navigation</span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
        </button>
        <a className='navbar-brand' href='#'>Nadjib</a>
      </div>
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