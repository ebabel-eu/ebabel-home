import React from 'react';

const actions = [
  { label: 'Current projects' },
  { label: 'Get in touch' },
  { label: 'When am I free' },
  { label: 'Hire me' }
];

const NavigationBar = () => (
  <nav>
    <ul>
      {
        actions.map((action, i) => {
          return (
            <li key={i}>
              <a>
                {action.label}
              </a>
            </li>
          )
        })
      }
    </ul>
  </nav>
);

export default NavigationBar;